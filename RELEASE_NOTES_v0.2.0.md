# openchat-llm v0.2.0 Windows Desktop Preview

This release adds an experimental Windows desktop installer built with Tauri.

## Highlights

- Windows desktop preview for `openchat-llm`.
- Desktop metadata updated to `openchat-llm v0.2.0`.
- Tauri updater disabled for this preview release.
- Desktop icon assets regenerated from the openchat-llm logo.
- No bundled API key, company endpoint, free quota, or payment flow.

## Install Notes

Download the Windows installer asset from this release and install it locally. After launching the app, configure your own OpenAI-compatible API key and base URL in Settings.

This preview build is not code-signed. Windows SmartScreen may show a warning. The MSI installs to `C:\Program Files\openchat-llm` and may require administrator approval. Verify the SHA256 checksum before installing.

## SHA256

```text
openchat-llm_0.2.0_x64_en-US.msi
55D0B160C10EA9EBC1A693AD79BD2D64C7C5DCD4186FACF0CC5CCD2B90798BA2
```

## Validation

- `yarn export` completed successfully.
- `yarn app:build` completed successfully in a Visual Studio Build Tools developer environment.
- Windows MSI generated successfully.
- Local silent install was attempted and failed with Windows Installer error `1925` because the current process did not have sufficient privileges for all-user installation. Manual installation should be run with administrator approval.

## Compliance

This project is based on NextChat and preserves the MIT license and attribution notices. It is not affiliated with, endorsed by, or sponsored by the original NextChat maintainers.
