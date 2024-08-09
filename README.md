<h1>TapTapUI</h1>

**TapTapUI fast and high-quality interfaces**. 
TapTapUI offers fast creation of beautiful user interfaces

```jsx
import React from "react";
import { Title } from "taptap-ui";

export const Home = () => (
  <Title>Title</Title>
);
```

# Install TapTapUI

You can install TapTapUI into your React project by downloading the package from [from GitHub].

[from GitHub]: https://github.com/WhoStoleMySleep/TapTapUI/releases

If you are using Node.js, you can also install TapTapUI using [npm] by running the command

[npm]: https://www.npmjs.com/

```
npm install taptap-ui
```

Or if you are using [yarn]

[yarn]: https://yarnpkg.com/

```
yarn add taptap-ui
```

After installing the TapTapUI package, you need to add a style import 
to your index.[j/t]sx

```jsx
import 'taptap-ui/dist/esm/index.css'
```

## Using TapTapUI

To use any TapTapUI component, you just import it. And use it like normal components in React

#### Example:

```jsx
// Any other component can take the place of Title
import React from "react";
import { Title, Text } from "taptap-ui";

export const Home = () => (
    <div>
        <Title>Title</Title>
        <Text>
            Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. 
            Blanditiis itaque magni neque 
            provident vero. Adipisci aut 
            cupiditate deserunt, ex fugiat 
            iste minus molestias, pariatur 
            perspiciatis quaerat quos 
            ratione rem tempora.
        </Text>
    </div>
);
```

## Learn TapTapUI

Check out the [TapTapUI website](https://taptap-ui.vercel.app/) 
to see what's available in TapTapUI

## Future scope

* README localization
* Validation of SEO
* Configuration file

### Versioning Policy

The proposals in this repository are versioned to make it easy to track changes
and reference older versions. Each version has a Git tag of the form
of the form `v<MAJOR>.<MINOR>.<PATCH>`. A new version must be created for each
change package.