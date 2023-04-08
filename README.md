# ngx-radiantframe

A media embedder for Angular supporting multiple common media providers like YouTube, Twitter, Dailymotion, Vimeo, Instagram, and more.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Supported Media Providers](#supported-media-providers)
- [Configuration](#configuration)
- [Contribution](#contribution)
- [License](#license)

## Installation

To install ngx-radiantframe, run:

```bash
npm install ngx-radiantframe
```

## Usage

1. Import `NgxRadiantframeModule` in your app's module:

    ```typescript
    import { NgxRadiantframeModule } from 'ngx-radiantframe';

    @NgModule({
      imports: [
        // ...
        NgxRadiantframeModule,
      ],
    })
    export class AppModule {}
    ```

2. Use the ngx-radiantframe component in your app's component template:

    ```html
    <ngx-radiantframe [source]="sourceUrl"></ngx-radiantframe>
    ```

3. In your app's component class, set the sourceUrl variable:

    ```typescript
    sourceUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    ```

## Supported Media Providers

- YouTube
- Twitter [planned]
- Dailymotion [planned]
- Vimeo [planned]
- Instagram [planned]
- ...more to come [definitely planned]

## Configuration

You can configure the behavior of `ngx-radiantframe` using the following inputs:

- `source`: The media URL (required).
- `width`: The width of the embedded media (default: '100%').
- `height`: The height of the embedded media (default: 'auto').

For example:

```html
<ngx-radiantframe [source]="sourceUrl" width="640" height="360"></ngx-radiantframe>
```

## Contribution

Contributions are welcome! Please see CONTRIBUTING.md for details on how to contribute.

## Disclaimer

This project is in its infancy and is currently in a pre-alpha state. While I am actively developing and improving it, please be aware that improvements, bug fixes, and even acceptance of pull requests may be slow or infrequent. Additionally, this project is not yet suitable for production use.

I appreciate any and all contributions to the project, but please understand that I am working on it sporadically and may not be able to respond to issues or pull requests in a timely manner. I will do my best to review and address them as soon as possible, but there may be delays.

Thank you for your interest in this project, and I appreciate your patience and understanding as I work to improve it.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
