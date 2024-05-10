import { useState } from "react";

// start
export function MemeCompontentPersil(props) {
  const [title, setTitle] = useState(props.title);

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
