# rescname

Use custom domain for Cloudinary Res. Example: https://img-w3teal.vercel.app/image/upload/v1740793104/W3_fill_wdy6ow.png

## Why?

You need to [pay to Cloudinary Res for use CNAMEs](https://cloudinary.com/documentation/advanced_url_delivery_options#private_cdns_and_custom_delivery_hostnames_cnames). Becuase i broke, i built this.  
Note: With ChatGPT.

## How

1. [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fw3teal%2Frescname)
2. Go to the project dashboard, go to Settings > Environment Variables.  
   Add new variable like this:

| Key | Value |
|--|--|
|CLOUDINARY_ENV|ksjjaoko*|

*Change this to your Product environment cloud name
