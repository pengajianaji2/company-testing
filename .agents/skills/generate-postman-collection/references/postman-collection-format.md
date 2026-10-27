# Format Collection & Pola Script

> Dipakai skill `generate-postman-collection`. Target: **Postman Collection v2.1**
> (`https://schema.getpostman.com/json/collection/v2.1.0/collection.json`). Contoh lengkap yang sudah diuji ada di
> `example-collection.json` dan `example-environment.json` — tiru strukturnya.

## Struktur umum

```text
Collection
├── 1. Happy Path
│   ├── 1.1 Auth            (register → login: menyimpan token)
│   ├── 1.2 <Resource A>    (create → list → get → update)
│   └── ...
├── 2. Worst Case
│   ├── 2.1 Auth
│   ├── 2.2 <Resource A>
│   └── ...
└── 3. Cleanup              (delete data buatan test → pastikan 404)
```

Postman Runner menjalankan item **sesuai urutan** folder/request, jadi urutan penyusunan = urutan eksekusi.

## Kerangka JSON

```json
{
  "info": {
    "name": "<Proyek> API",
    "description": "Dibuat oleh skill generate-postman-collection. Jalankan di lingkungan dev/test.",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "auth": { "type": "bearer", "bearer": [{ "key": "token", "value": "{{token}}", "type": "string" }] },
  "variable": [ { "key": "token", "value": "" }, { "key": "itemId", "value": "" } ],
  "item": [ { "name": "1. Happy Path", "item": [ /* subfolder / request */ ] } ]
}
```

Request:

```json
{
  "name": "Items - create",
  "request": {
    "method": "POST",
    "header": [{ "key": "Content-Type", "value": "application/json" }],
    "body": { "mode": "raw", "raw": "{\n  \"name\": \"Item {{$timestamp}}\",\n  \"price\": 10\n}",
              "options": { "raw": { "language": "json" } } },
    "url": { "raw": "{{baseUrl}}/api/items", "host": ["{{baseUrl}}"], "path": ["api", "items"] },
    "description": "Sumber: src/routes/items.js:12 | US-1 / AC-1"
  },
  "event": [
    { "listen": "prerequest", "script": { "type": "text/javascript", "exec": ["// opsional"] } },
    { "listen": "test", "script": { "type": "text/javascript", "exec": ["pm.test(...)"] } }
  ]
}
```

- Tanpa auth untuk satu request: tambahkan `"auth": { "type": "noauth" }` di dalam objek `request`.
- Token sampah untuk satu request: `"auth": { "type": "bearer", "bearer": [{ "key": "token", "value": "invalid.token.value", "type": "string" }] }`.
- Query: `"url": { ..., "query": [{ "key": "page", "value": "-1" }] }` dan `raw` harus ikut memuat `?page=-1`.
- Form: `"body": { "mode": "formdata", "formdata": [{ "key": "file", "type": "file", "src": [] }] }`.

## Variabel

| Jenis | Isi | Di mana |
|---|---|---|
| Environment | `baseUrl`, kredensial uji (`userPassword`, token admin) — nilai rahasia **kosong** | `*.postman_environment.json` |
| Collection variable | Data berantai saat run: `token`, `userId`, `itemId`, `userEmail` | `variable` di collection + `pm.collectionVariables.set` |
| Dynamic Postman | `{{$timestamp}}`, `{{$guid}}`, `{{$randomInt}}` | Dipakai langsung di body/URL |

Semua `{{nama}}` yang dipakai harus terdefinisi di environment, di `variable` collection, atau di-set oleh script request sebelumnya.

## Pola script (copy-paste)

**Data unik (pre-request, mis. register):**
```javascript
pm.collectionVariables.set('userEmail', 'qa_' + Date.now() + '@example.com');
```

**Happy path — status + simpan id:**
```javascript
pm.test('Status 201 Created', function () { pm.response.to.have.status(201); });
const json = pm.response.json();
pm.test('Respons memuat id', function () { pm.expect(json).to.have.property('id'); });
pm.collectionVariables.set('itemId', json.id);
```

**Happy path — simpan token:**
```javascript
pm.test('Status 200 OK', function () { pm.response.to.have.status(200); });
const json = pm.response.json();
pm.test('Token diterima', function () { pm.expect(json.token).to.be.a('string').and.not.empty; });
pm.collectionVariables.set('token', json.token);
```

**Worst case — status pasti + tidak 5xx:**
```javascript
pm.test('Ditolak dengan 400', function () { pm.response.to.have.status(400); });
pm.test('Tidak ada error server (bukan 5xx)', function () { pm.expect(pm.response.code).to.be.below(500); });
```

**Worst case — status tidak pasti (tulis [Asumsi] di deskripsi):**
```javascript
pm.test('Ditolak dengan 4xx', function () { pm.expect(pm.response.code).to.be.within(400, 499); });
pm.test('Tidak ada error server (bukan 5xx)', function () { pm.expect(pm.response.code).to.be.below(500); });
```

**Respons JSON valid (hanya bila API memang JSON):**
```javascript
pm.test('Respons berupa JSON', function () { pm.response.to.be.json; });
```

## Penamaan

- Folder: `1. Happy Path`, `2. Worst Case`, `3. Cleanup`; subfolder `1.1 Auth`, `1.2 Items`, dst.
- Happy: `<Resource> - <aksi>` (misal `Items - create`).
- Worst: `[WC] <Resource> - <kasus>`.
- Cleanup: `[Cleanup] <Resource> - delete` dan `[Cleanup] <Resource> - get setelah delete`.

## File environment

```json
{
  "name": "<Proyek> - local",
  "values": [
    { "key": "baseUrl", "value": "http://localhost:3000", "type": "default", "enabled": true },
    { "key": "userPassword", "value": "", "type": "secret", "enabled": true }
  ],
  "_postman_variable_scope": "environment"
}
```

Nilai rahasia selalu kosong/placeholder; manusia yang mengisinya di Postman.
