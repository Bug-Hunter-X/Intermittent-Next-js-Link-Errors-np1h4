```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
export default MyComponent;
// Ensure that the about page exists in the pages directory with the correct export
// pages/about.js
export default function About(){
    return <div>About page</div>
}
```