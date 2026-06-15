# onyxia-LS3

## Dev

```bash
git clone https://github.com/InseeFrLab/onyxia
cd onyxia
cd web
yarn install
git clone https://github.com/garronej/onyxia-LS3 public/custom-resources
cp public/custom-resources/.env.local.yaml . && yarn dev
```

## Building for production

```bash
git clone https://github.com/garronej/onyxia-LS3 
cd onyxia-LS3
zip -r onyxia-LS3.zip . -x "./README.md" "./env.local.yaml" "./Onyxia.d.ts" "./jsconfig.json" ".gitignore"

```

Then upload `onyxia-LS3.zip` in some CDN so you have an url to download it. 
In the `values.yaml` should be set the values of `./.env.local.yaml` and additionally:

```yaml
onyxia:
  web:
    env:
      CUSTOM_RESOURCES: "<https url to onyxia-LS3.zip>"
```