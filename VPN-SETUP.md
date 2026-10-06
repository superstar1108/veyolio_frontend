# Installing on a VPN

1. Close VS Code and any running `npm run dev`.
2. Double-click `install.bat` (or run it from the project folder). It cleans the old partial
   install and retries `npm install` up to 5 times, keeping what was already downloaded.
3. Then run `npm run dev` and open http://localhost:3000.

The project `.npmrc` already limits parallel connections and adds long retries/timeouts.

## If your VPN uses a proxy (common on company VPNs)
Ask IT for the proxy address, then:
```
npm config set proxy http://PROXY_HOST:PORT
npm config set https-proxy http://PROXY_HOST:PORT
```

## If you see "self-signed certificate" / "UNABLE_TO_GET_ISSUER_CERT"
Your VPN inspects HTTPS. Get the company root certificate (.pem/.crt) from IT, then:
```
npm config set cafile "C:\path\to\company-root.pem"
```
Do not use `strict-ssl=false` — it turns off security checks for every package.

## To undo proxy settings when off the VPN
```
npm config delete proxy
npm config delete https-proxy
```
