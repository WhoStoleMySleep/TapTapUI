<h1><img width="200px" alt="NovoUI" src="https://github.com/user-attachments/assets/3435b43e-f5d4-41bb-83a8-9b69a08fa816" /></h1>

**NovoUi fast and high-quality interfaces**. 
NovoUI offers fast creation of beautiful user interfaces

```jsx
import React from "react";
import { Title } from "novo-ui";

export const Home = () => (
  <Title>Title</Title>
);
```

# Install NovoUI

You can install NovoUI into your React project by downloading the package from [from GitHub].

[from GitHub]: https://github.com/WhoStoleMySleep/NovoUI/releases

If you are using Node.js, you can also install NovoUI using [npm] by running the command

[npm]: https://www.npmjs.com/

```
npm install novo-ui
```

Or if you are using [yarn]

[yarn]: https://yarnpkg.com/

```
yarn add novo-ui
```

After installing the NovoUI package, you need to add a style import 
to your index.[j/t]sx

```jsx
import 'novo-ui/dist/esm/index.css'
```

## Using NovoUI

To use any NevoUI component, you just import it. And use it like normal components in React

#### Example:

```jsx
// Any other component can take the place of Title
import React from "react";
import { Title, Text } from "novo-ui";

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

## Learn NovoUI

Check out the [NovoUI website](https://novo-ui.vercel.app/) 
to see what's available in NovoUI

## Future scope

* README localization
* Change basic type to standard (No styles)
* Validation of SEO
* Сonfiguration file

### Versioning Policy

The proposals in this repository are versioned to make it easy to track changes
and reference older versions. Each version has a Git tag of the form
of the form `v<MAJOR>.<MINOR>.<PATCH>`. A new version must be created for each
change package.