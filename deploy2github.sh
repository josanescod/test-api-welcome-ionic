# pequeño script que ejecuta los comandos para crear la carpeta www y desplegarla en github-pages
ionic build --prod  -- --base-href https://josanescod.github.io/test-api-welcome-ionic/
npx angular-cli-ghpages --dir=www