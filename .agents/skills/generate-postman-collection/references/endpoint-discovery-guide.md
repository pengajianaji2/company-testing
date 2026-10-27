# Panduan Menemukan Endpoint (Read-Only)

> Dipakai skill `generate-postman-collection`. Semua langkah hanya **membaca**. Setiap endpoint harus bisa ditunjuk ke `file:baris`.

## Urutan kerja

1. **Spesifikasi dulu (jika ada):** cari `openapi.(json|yaml|yml)`, `swagger.*`, `api-docs`, anotasi Swagger di kode.
   Gunakan sebagai peta awal, lalu **cocokkan dengan kode**. Jika berbeda, kode yang benar; catat ketidakcocokan di laporan.
2. **Deteksi framework** dari manifest (`package.json`, `requirements.txt`/`pyproject.toml`, `go.mod`, `pom.xml`/`build.gradle`, `composer.json`, `Gemfile`, `*.csproj`).
3. **Cari registrasi route** dengan pola di tabel di bawah.
4. **Selesaikan path lengkap:** gabungkan prefix dari mount/router/versioning/`basePath`/`root_path`. Jika prefix berasal dari variabel lingkungan, pakai nama variabel itu di laporan dan tanyakan nilainya.
5. **Per endpoint, baca handler** untuk: parameter path/query/header, bentuk body (skema validasi), auth/role (middleware/guard/decorator), kode status yang dikembalikan, dan bentuk respons.
6. **Tentukan base URL & port** dari konfigurasi/kode (`PORT`, `server.port`, `app.run(port=...)`, `.env.example`, skrip `dev` di manifest). Jangan membuka `.env`.

## Pola per framework

| Framework | Di mana mencari | Catatan |
|---|---|---|
| **Express / Koa / Hono** | `app.get\|post\|put\|patch\|delete(`, `router.*(`, `app.use('/prefix', router)`, `.route('/x').get()` | Ikuti `require/import` router sampai titik mount-nya |
| **Fastify** | `fastify.get(`, `fastify.route({`, `register(plugin, {prefix})` | Skema JSON ada di opsi `schema` |
| **NestJS** | `@Controller('x')` + `@Get/@Post/...('y')`, `app.setGlobalPrefix`, `@UseGuards`, DTO + `class-validator` | Prefix = global + controller + method |
| **Next.js (App Router)** | `app/**/route.(ts\|js)` mengekspor `GET/POST/...`; path = struktur folder, `[id]` = parameter | Route groups `(x)` tidak masuk URL |
| **Next.js (Pages)** | `pages/api/**` (handler memeriksa `req.method`) | Satu file bisa banyak method |
| **FastAPI** | `@app.get(`, `@router.post(`, `APIRouter(prefix=)`, `include_router(prefix=)` | Model `pydantic` = skema body; `Depends` = auth |
| **Flask** | `@app.route(path, methods=[...])`, `Blueprint(url_prefix=)`, `register_blueprint` | |
| **Django / DRF** | `urls.py` (`path`, `re_path`, `include`), `ViewSet` + `router.register`, serializers | Aksi ViewSet: list/create/retrieve/update/destroy |
| **Go** | `http.HandleFunc`, `mux.HandleFunc`, chi `r.Get/Route/Mount`, gin `r.GET/Group`, echo `e.GET/Group` | Group = prefix |
| **Spring Boot** | `@RestController`, `@RequestMapping`, `@GetMapping/...`, `@Valid` DTO | Prefix = class + method |
| **Laravel** | `routes/api.php` (`Route::get/apiResource/group(prefix)`), FormRequest rules | Prefix `/api` otomatis |
| **Rails** | `config/routes.rb` (`resources`, `namespace`) | Strong params = field yang diizinkan |
| **ASP.NET** | `[ApiController]`, `[Route]`, `[HttpGet]`, minimal API `app.MapGet` | |
| **GraphQL** | Satu endpoint (biasanya `POST /graphql`); skema `.graphql`/code-first | Buat request per query/mutation penting dengan body `{query, variables}` |

## Menurunkan ekspektasi dari kode

| Yang dicari | Sumber di kode |
|---|---|
| Status sukses | `res.status(201)`, `return Response(status=201)`, `@HttpCode(201)`, `status_code=201` |
| Status gagal validasi | handler error global, `HTTPException(422)`, `BadRequestException`, `ctx.JSON(400, ...)` |
| 401 vs 403 | middleware auth (token tidak ada/tidak valid → 401) vs guard role (→ 403) |
| 404 | `findById` null → `NotFound`, `get_object_or_404` |
| 409 | pemeriksaan unik / constraint duplicate |
| Batas nilai | `min/max/length`, `.min(1).max(50)`, `Field(gt=0)`, `@Length`, `validate:"max=50"` |
| Bentuk respons | objek yang dikembalikan di handler / serializer / DTO respons |

Jika ekspektasi tidak bisa dipastikan dari kode, pakai rentang `4xx` dan tandai `[Asumsi]`.

## Yang tidak bisa dibuat sebagai request Collection

WebSocket, Server-Sent Events (streaming), gRPC, webhook masuk yang butuh tanda tangan pihak ketiga. Catat di "Tidak tercakup".

## Upload file & body khusus

- `multipart/form-data` → mode `formdata`; field file dibiarkan kosong dan dicatat agar user memilih berkas.
- `application/x-www-form-urlencoded` → mode `urlencoded`.
- Auth selain Bearer (API key header, Basic, cookie sesi) → set di level collection sesuai yang terlihat di kode.

## Endpoint berisiko (kecualikan secara default)

Hapus massal, reset/seed database, pembayaran, kirim email/SMS/notifikasi, impersonasi admin, endpoint "danger/internal".
Tampilkan di inventaris dengan tanda ⚠️ dan tunggu keputusan user.
