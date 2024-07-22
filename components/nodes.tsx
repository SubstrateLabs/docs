/**
 Notes:
 - Suppressing the hydration warning using details with useEffect
    - https://nextjs.org/docs/messages/react-hydration-error#solution-1-using-useeffect-to-run-on-the-client-only
 */
"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";

// https://www.robinwieruch.de/react-hook-detect-click-outside-component/
const useOutsideClick = (callback: any) => {
  const ref = useRef();
  useEffect(() => {
    const handleClick = (event: any) => {
      // @ts-ignore
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref]);
  return ref;
};

export function Experimental() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"Experimental"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {"Experimental node."}
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#Experimental`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`Experimental(
    name="some_name",
    args={
        "foo": "bar",
    },
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "output": {
    "foo": "bar"
  }
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"Experimental"}</>
  );
}

export function ComputeText() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"ComputeText"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {"Compute text using a language model."}
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#ComputeText`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`ComputeText(
    prompt="Who is Don Quixote?",
    temperature=0.4,
    max_tokens=800,
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "text": "Don Quixote is a fictional character in the novel of the same name by Miguel de Cervantes."
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"ComputeText"}</>
  );
}

export function MultiComputeText() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"MultiComputeText"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {"Generate multiple text choices using a language model."}
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#MultiComputeText`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`MultiComputeText(
    prompt="Who is Don Quixote?",
    num_choices=2,
    max_tokens=800,
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "choices": [
    {
      "text": "Don Quixote is a fictional character and the protagonist of the novel Don Quixote by Miguel..."
    },
    {
      "text": "Don Quixote is a fictional character created by the Spanish author Miguel de Cervantes..."
    }
  ]
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"MultiComputeText"}</>
  );
}

export function BatchComputeText() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"BatchComputeText"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {"Compute text for multiple prompts in batch using a language model."}
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#BatchComputeText`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`BatchComputeText(
    prompts=[
        "Who is Don Quixote?",
        "Who is Sancho Panza?",
    ],
    max_tokens=800,
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "outputs": [
    {
      "text": "Don Quixote is a fictional character and the protagonist of the novel Don Quixote by Miguel..."
    },
    {
      "text": "Don Quixote is a fictional character created by the Spanish author Miguel de Cervantes..."
    }
  ]
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"BatchComputeText"}</>
  );
}

export function BatchComputeJSON() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"BatchComputeJSON"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {"Compute JSON for multiple prompts in batch using a language model."}
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#BatchComputeJSON`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`BatchComputeJSON(
    prompts=[
        "Who is Don Quixote?",
        "Who is Sancho Panza?",
    ],
    max_tokens=800,
    json_schema={
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "description": "The name of the character.",
            },
            "bio": {
                "type": "string",
                "description": "Concise biography of the character.",
            },
        },
    },
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "outputs": [
    {
      "json_object": {}
    },
    {
      "json_object": {}
    }
  ]
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"BatchComputeJSON"}</>
  );
}

export function ComputeJSON() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"ComputeJSON"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {"Compute JSON using a language model."}
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#ComputeJSON`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`ComputeJSON(
    prompt="Who wrote Don Quixote?",
    json_schema={
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "description": "The name of the author.",
            },
            "bio": {
                "type": "string",
                "description": "Concise biography of the author.",
            },
        },
    },
    temperature=0.4,
    max_tokens=800,
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "json_object": {}
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"ComputeJSON"}</>
  );
}

export function MultiComputeJSON() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"MultiComputeJSON"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {"Compute multiple JSON choices using a language model."}
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#MultiComputeJSON`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`MultiComputeJSON(
    prompt="Who wrote Don Quixote?",
    json_schema={
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "description": "The name of the author.",
            },
            "bio": {
                "type": "string",
                "description": "Concise biography of the author.",
            },
        },
    },
    num_choices=2,
    temperature=0.4,
    max_tokens=800,
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "choices": [
    {
      "json_object": {}
    },
    {
      "json_object": {}
    }
  ]
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"MultiComputeJSON"}</>
  );
}

export function Mistral7BInstruct() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"Mistral7BInstruct"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {
            "Compute text using [Mistral 7B Instruct](https://mistral.ai/news/announcing-mistral-7b)."
          }
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#Mistral7BInstruct`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`Mistral7BInstruct(
    prompt="Who is Don Quixote?",
    num_choices=2,
    temperature=0.4,
    max_tokens=800,
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "choices": [
    {
      "text": "Don Quixote is a fictional character and the protagonist of the novel Don Quixote by Miguel..."
    },
    {
      "text": "Don Quixote is a fictional character created by the Spanish author Miguel de Cervantes..."
    }
  ]
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"Mistral7BInstruct"}</>
  );
}

export function Mixtral8x7BInstruct() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"Mixtral8x7BInstruct"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {
            "Compute text using instruct-tuned [Mixtral 8x7B](https://mistral.ai/news/mixtral-of-experts/)."
          }
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#Mixtral8x7BInstruct`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`Mixtral8x7BInstruct(
    prompt="Who is Don Quixote?",
    num_choices=2,
    temperature=0.4,
    max_tokens=800,
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "choices": [
    {
      "text": "Don Quixote is a fictional character and the protagonist of the novel Don Quixote by Miguel..."
    },
    {
      "text": "Don Quixote is a fictional character created by the Spanish author Miguel de Cervantes..."
    }
  ]
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"Mixtral8x7BInstruct"}</>
  );
}

export function Llama3Instruct8B() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"Llama3Instruct8B"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {
            "Compute text using instruct-tuned [Llama 3 8B](https://llama.meta.com/llama3/)."
          }
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#Llama3Instruct8B`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`Llama3Instruct8B(
    prompt="Who is Don Quixote?",
    num_choices=2,
    temperature=0.4,
    max_tokens=800,
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "choices": [
    {
      "text": "Don Quixote is a fictional character and the protagonist of the novel Don Quixote by Miguel..."
    },
    {
      "text": "Don Quixote is a fictional character created by the Spanish author Miguel de Cervantes..."
    }
  ]
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"Llama3Instruct8B"}</>
  );
}

export function Llama3Instruct70B() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"Llama3Instruct70B"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {
            "Compute text using instruct-tuned [Llama 3 70B](https://llama.meta.com/llama3/)."
          }
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#Llama3Instruct70B`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`Llama3Instruct70B(
    prompt="Who is Don Quixote?",
    num_choices=2,
    temperature=0.4,
    max_tokens=800,
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "choices": [
    {
      "text": "Don Quixote is a fictional character and the protagonist of the novel Don Quixote by Miguel..."
    },
    {
      "text": "Don Quixote is a fictional character created by the Spanish author Miguel de Cervantes..."
    }
  ]
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"Llama3Instruct70B"}</>
  );
}

export function Firellava13B() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"Firellava13B"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {
            "Compute text with image input using [FireLLaVA 13B](https://fireworks.ai/blog/firellava-the-first-commercially-permissive-oss-llava-model)."
          }
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#Firellava13B`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`Firellava13B(
    prompt="what are these paintings of and who made them?",
    image_uris=[
        "https://media.substrate.run/docs-fuji-red.jpg",
        "https://media.substrate.run/docs-fuji-blue.jpg",
    ],
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "text": "The artist who created these paintings is Hokusai Katsushika, a renowned Japanese artist known for his woodblock prints and paintings."
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"Firellava13B"}</>
  );
}

export function GenerateImage() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"GenerateImage"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {"Generate an image."}
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#GenerateImage`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`GenerateImage(
    prompt="hokusai futuristic supercell spiral cloud with glowing core over turbulent ocean",
    store="hosted",
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "image_uri": "https://assets.substrate.run/84848484.jpg"
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"GenerateImage"}</>
  );
}

export function MultiGenerateImage() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"MultiGenerateImage"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {"Generate multiple images."}
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#MultiGenerateImage`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`MultiGenerateImage(
    prompt="hokusai futuristic supercell spiral cloud with glowing core over turbulent ocean",
    num_images=2,
    store="hosted",
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "outputs": [
    {
      "image_uri": "https://assets.substrate.run/84848484.jpg"
    },
    {
      "image_uri": "https://assets.substrate.run/48484848.jpg"
    }
  ]
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"MultiGenerateImage"}</>
  );
}

export function InpaintImage() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"InpaintImage"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {
            "Edit an image using image generation inside part of the image or the full image."
          }
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#InpaintImage`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`InpaintImage(
    image_uri="https://media.substrate.run/docs-klimt-park.jpg",
    mask_image_uri="https://media.substrate.run/spiral-logo.jpeg",
    prompt="large tropical colorful bright anime birds in a dark jungle full of vines, high resolution",
    store="hosted",
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "image_uri": "https://assets.substrate.run/84848484.jpg"
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"InpaintImage"}</>
  );
}

export function MultiInpaintImage() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"MultiInpaintImage"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {"Edit multiple images using image generation."}
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#MultiInpaintImage`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`MultiInpaintImage(
    image_uri="https://media.substrate.run/docs-klimt-park.jpg",
    mask_image_uri="https://media.substrate.run/spiral-logo.jpeg",
    prompt="large tropical colorful bright anime birds in a dark jungle full of vines, high resolution",
    num_images=2,
    store="hosted",
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "outputs": [
    {
      "image_uri": "https://assets.substrate.run/84848484.jpg"
    },
    {
      "image_uri": "https://assets.substrate.run/48484848.jpg"
    }
  ]
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"MultiInpaintImage"}</>
  );
}

export function StableDiffusionXLLightning() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"StableDiffusionXLLightning"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {
            "Generate an image using [Stable Diffusion XL Lightning](https://arxiv.org/abs/2402.13929)."
          }
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#StableDiffusionXLLightning`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`StableDiffusionXLLightning(
    prompt="hokusai futuristic supercell spiral cloud with glowing core over turbulent ocean",
    negative_prompt="night, moon",
    num_images=2,
    seeds=[
        330699,
        136464,
    ],
    store="hosted",
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "outputs": [
    {
      "image_uri": "https://assets.substrate.run/84848484.jpg",
      "seed": 330418
    },
    {
      "image_uri": "https://assets.substrate.run/48484848.jpg",
      "seed": 1364164
    }
  ]
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"StableDiffusionXLLightning"}</>
  );
}

export function StableDiffusionXLInpaint() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"StableDiffusionXLInpaint"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {
            "Edit an image using [Stable Diffusion XL](https://arxiv.org/abs/2307.01952). Supports inpainting (edit part of the image with a mask) and image-to-image (edit the full image)."
          }
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#StableDiffusionXLInpaint`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`StableDiffusionXLInpaint(
    image_uri="https://media.substrate.run/docs-klimt-park.jpg",
    mask_image_uri="https://media.substrate.run/spiral-logo.jpeg",
    prompt="large tropical colorful bright birds in a jungle, high resolution oil painting",
    negative_prompt="dark, cartoon, anime",
    strength=0.8,
    num_images=2,
    store="hosted",
    seeds=[
        1607280,
        1720395,
    ],
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "outputs": [
    {
      "image_uri": "https://assets.substrate.run/84848484.jpg",
      "seed": 1607326
    },
    {
      "image_uri": "https://assets.substrate.run/48484848.jpg",
      "seed": 1720398
    }
  ]
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"StableDiffusionXLInpaint"}</>
  );
}

export function StableDiffusionXLControlNet() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"StableDiffusionXLControlNet"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {
            "Generate an image with generation structured by an input image, using Stable Diffusion XL with [ControlNet](https://arxiv.org/abs/2302.05543)."
          }
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#StableDiffusionXLControlNet`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`StableDiffusionXLControlNet(
    image_uri="https://media.substrate.run/spiral-logo.jpeg",
    prompt="the futuristic solarpunk city of atlantis at sunset, cinematic bokeh HD",
    control_method="illusion",
    conditioning_scale=1.0,
    strength=1.0,
    store="hosted",
    num_images=2,
    seeds=[
        1607226,
        1720395,
    ],
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "outputs": [
    {
      "image_uri": "https://assets.substrate.run/84848484.jpg",
      "seed": 1607266
    },
    {
      "image_uri": "https://assets.substrate.run/48484848.jpg",
      "seed": 1720398
    }
  ]
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"StableDiffusionXLControlNet"}</>
  );
}

export function TranscribeSpeech() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"TranscribeSpeech"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {"Transcribe speech in an audio or video file."}
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#TranscribeSpeech`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`TranscribeSpeech(
    audio_uri="https://media.substrate.run/dfw-clip.m4a",
    prompt="David Foster Wallace interviewed about US culture, and Infinite Jest",
    segment=True,
    align=True,
    diarize=True,
    suggest_chapters=True,
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "text": "language like that, the wounded inner child, the inner pain, is part of a kind of pop psychological movement in the United States that is a sort of popular Freudianism that ...",
  "segments": [
    {
      "start": 0.874,
      "end": 15.353,
      "speaker": "SPEAKER_00",
      "text": "language like that, the wounded inner child, the inner pain, is part of a kind of pop psychological movement in the United States that is a sort of popular Freudianism that",
      "words": [
        {
          "word": "language",
          "start": 0.874,
          "end": 1.275,
          "speaker": "SPEAKER_00"
        },
        {
          "word": "like",
          "start": 1.295,
          "end": 1.455,
          "speaker": "SPEAKER_00"
        }
      ]
    }
  ],
  "chapters": [
    {
      "title": "Introduction to the Wounded Inner Child and Popular Psychology in US",
      "start": 0.794
    },
    {
      "title": "The Paradox of Popular Psychology and Anger in America",
      "start": 16.186
    }
  ]
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"TranscribeSpeech"}</>
  );
}

export function GenerateSpeech() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"GenerateSpeech"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {"Generate speech from text."}
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#GenerateSpeech`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`GenerateSpeech(
    text="Substrate: an underlying substance or layer.",
    store="hosted",
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "audio_uri": "https://assets.substrate.run/84848484.wav"
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"GenerateSpeech"}</>
  );
}

export function RemoveBackground() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"RemoveBackground"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {
            "Remove the background from an image and return the foreground segment as a cut-out or a mask."
          }
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#RemoveBackground`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`RemoveBackground(
    image_uri="https://media.substrate.run/apple-forest.jpeg",
    store="hosted",
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "image_uri": "https://assets.substrate.run/84848484.jpg"
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"RemoveBackground"}</>
  );
}

export function EraseImage() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"EraseImage"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {
            "Erase the masked part of an image, e.g. to remove an object by inpainting."
          }
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#EraseImage`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`EraseImage(
    image_uri="https://media.substrate.run/apple-forest.jpeg",
    mask_image_uri="https://media.substrate.run/apple-forest-mask.jpeg",
    store="hosted",
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "image_uri": "https://assets.substrate.run/84848484.jpg"
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"EraseImage"}</>
  );
}

export function UpscaleImage() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"UpscaleImage"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {"Upscale an image using image generation."}
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#UpscaleImage`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`UpscaleImage(
    prompt="high resolution detailed spiral shell",
    image_uri="https://media.substrate.run/docs-shell-emoji.jpg",
    store="hosted",
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "image_uri": "https://assets.substrate.run/84848484.jpg"
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"UpscaleImage"}</>
  );
}

export function SegmentUnderPoint() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"SegmentUnderPoint"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {"Segment an image under a point and return the segment."}
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#SegmentUnderPoint`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`SegmentUnderPoint(
    image_uri="https://media.substrate.run/docs-vg-bedroom.jpg",
    point={
        "x": 189,
        "y": 537,
    },
    store="hosted",
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "mask_image_uri": "https://assets.substrate.run/84848484.jpg"
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"SegmentUnderPoint"}</>
  );
}

export function SegmentAnything() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"SegmentAnything"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {
            "Segment an image using [SegmentAnything](https://github.com/facebookresearch/segment-anything)."
          }
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#SegmentAnything`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`SegmentAnything(
    image_uri="https://media.substrate.run/docs-vg-bedroom.jpg",
    point_prompts=[
        {
            "x": 189,
            "y": 537,
        },
    ],
    store="hosted",
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "mask_image_uri": "https://assets.substrate.run/84848484.jpg"
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"SegmentAnything"}</>
  );
}

export function SplitDocument() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"SplitDocument"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {"Split document into text segments."}
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#SplitDocument`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`SplitDocument(
    doc_id="example_pdf",
    uri="https://arxiv.org/pdf/2405.07945",
    metadata={
        "title": "GRASS II: Simulations of Potential Granulation Noise Mitigation Methods",
    },
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "items": [
    {
      "text": "This is the first chunk of the pdf",
      "metadata": {
        "title": "GRASS II: Simulations of Potential Granulation Noise Mitigation Methods",
        "chunk_id": "chk_asd897asdhnad0j8qd8qnd98"
      },
      "doc_id": "example_pdf"
    },
    {
      "text": "This is the second chunk of the pdf",
      "metadata": {
        "title": "GRASS II: Simulations of Potential Granulation Noise Mitigation Methods",
        "chunk_id": "chk_nvsiusd89adsy89dahd9abs8"
      },
      "doc_id": "example_pdf"
    }
  ]
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"SplitDocument"}</>
  );
}

export function EmbedText() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"EmbedText"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {"Generate embedding for a text document."}
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#EmbedText`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`EmbedText(
    text="Argon is the third most abundant gas in Earth's atmosphere, at 0.934% (9340 ppmv). It is more than twice as abundant as water vapor.",
    model="jina-v2",
    collection_name="smoke_tests",
    metadata={
        "group": "18",
    },
    embedded_metadata_keys=[
        "group",
    ],
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "embedding": {
    "vector": [
      -0.035030052065849304,
      -0.04128379374742508,
      0.05782046541571617
    ],
    "doc_id": "c9de81fb98804ce0afb2b8ac17c0799b",
    "metadata": {
      "group": "18",
      "doc_id": "c9de81fb98804ce0afb2b8ac17c0799b",
      "doc": "group: 18\n\nArgon is the third most abundant gas in Earth's atmosphere, at 0.934% (9340 ppmv). It is more than twice as abundant as water vapor."
    }
  }
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"EmbedText"}</>
  );
}

export function MultiEmbedText() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"MultiEmbedText"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {"Generate embeddings for multiple text documents."}
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#MultiEmbedText`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`MultiEmbedText(
    model="jina-v2",
    items=[
        {
            "text": "Osmium is the densest naturally occurring element. When experimentally measured using X-ray crystallography, it has a density of 22.59 g/cm3. Manufacturers use its alloys with platinum, iridium, and other platinum-group metals to make fountain pen nib tipping, electrical contacts, and in other applications that require extreme durability and hardness.",
            "metadata": {
                "group": "8",
            },
        },
        {
            "text": "Despite its abundant presence in the universe and Solar System—ranking fifth in cosmic abundance following hydrogen, helium, oxygen, and carbon—neon is comparatively scarce on Earth.",
            "metadata": {
                "group": "18",
            },
        },
    ],
    collection_name="smoke_tests",
    embedded_metadata_keys=[
        "group",
    ],
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "embeddings": [
    {
      "vector": [
        -0.035030052065849304,
        -0.04128379374742508,
        0.05782046541571617
      ],
      "doc_id": "c9de81fb98804ce0afb2b8ac17c0799b",
      "metadata": {
        "group": "8",
        "doc_id": "c9de81fb98804ce0afb2b8ac17c0799b",
        "doc": "group: 8\n\nOsmium is the densest naturally occurring element. When experimentally measured using X-ray crystallography, it has a density of 22.59 g/cm3. Manufacturers use its alloys with platinum, iridium, and other platinum-group metals to make fountain pen nib tipping, electrical contacts, and in other applications that require extreme durability and hardness."
      }
    },
    {
      "vector": [
        0.0003024724137503654,
        -0.025219274684786797,
        -0.009984994307160378
      ],
      "doc_id": "c4464f69c93946a896925589681d38b4",
      "metadata": {
        "group": "18",
        "doc_id": "c4464f69c93946a896925589681d38b4",
        "doc": "group: 18\n\nDespite its abundant presence in the universe and Solar System\u2014ranking fifth in cosmic abundance following hydrogen, helium, oxygen, and carbon\u2014neon is comparatively scarce on Earth."
      }
    }
  ]
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"MultiEmbedText"}</>
  );
}

export function EmbedImage() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"EmbedImage"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {"Generate embedding for an image."}
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#EmbedImage`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`EmbedImage(
    image_uri="https://media.substrate.run/docs-fuji-red.jpg",
    collection_name="smoke_tests",
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "embedding": {
    "vector": [
      0.0003024724137503654,
      -0.025219274684786797,
      -0.009984994307160378
    ],
    "doc_id": "c4464f69c93946a896925589681d38b4"
  }
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"EmbedImage"}</>
  );
}

export function MultiEmbedImage() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"MultiEmbedImage"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {"Generate embeddings for multiple images."}
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#MultiEmbedImage`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`MultiEmbedImage(
    items=[
        {
            "image_uri": "https://media.substrate.run/docs-fuji-red.jpg",
        },
        {
            "image_uri": "https://media.substrate.run/docs-fuji-blue.jpg",
        },
    ],
    collection_name="smoke_tests",
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "embeddings": [
    {
      "vector": [
        -0.035030052065849304,
        -0.04128379374742508,
        0.05782046541571617
      ],
      "doc_id": "c9de81fb98804ce0afb2b8ac17c0799b"
    },
    {
      "vector": [
        0.0003024724137503654,
        -0.025219274684786797,
        -0.009984994307160378
      ],
      "doc_id": "c4464f69c93946a896925589681d38b4"
    }
  ]
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"MultiEmbedImage"}</>
  );
}

export function JinaV2() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"JinaV2"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {
            "Generate embeddings for multiple text documents using [Jina Embeddings 2](https://arxiv.org/abs/2310.19923)."
          }
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#JinaV2`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`JinaV2(
    items=[
        {
            "text": "Hassium is a superheavy element; it has been produced in a laboratory only in very small quantities by fusing heavy nuclei with lighter ones. Natural occurrences of the element have been hypothesised but never found.",
            "metadata": {
                "group": "8",
            },
        },
        {
            "text": "Xenon is also used to search for hypothetical weakly interacting massive particles and as a propellant for ion thrusters in spacecraft.",
            "metadata": {
                "group": "18",
            },
        },
    ],
    collection_name="smoke_tests",
    embedded_metadata_keys=[
        "group",
    ],
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "embeddings": [
    {
      "vector": [
        -0.035030052065849304,
        -0.04128379374742508,
        0.05782046541571617
      ],
      "doc_id": "c9de81fb98804ce0afb2b8ac17c0799b",
      "metadata": {
        "group": "8",
        "doc_id": "c9de81fb98804ce0afb2b8ac17c0799b",
        "doc": "group: 8\n\nHassium is a superheavy element; it has been produced in a laboratory only in very small quantities by fusing heavy nuclei with lighter ones. Natural occurrences of the element have been hypothesised but never found."
      }
    },
    {
      "vector": [
        0.0003024724137503654,
        -0.025219274684786797,
        -0.009984994307160378
      ],
      "doc_id": "c4464f69c93946a896925589681d38b4",
      "metadata": {
        "group": "18",
        "doc_id": "c4464f69c93946a896925589681d38b4",
        "doc": "group: 18\n\nXenon is also used to search for hypothetical weakly interacting massive particles and as a propellant for ion thrusters in spacecraft."
      }
    }
  ]
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"JinaV2"}</>
  );
}

export function CLIP() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"CLIP"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {
            "Generate embeddings for text or images using [CLIP](https://openai.com/research/clip)."
          }
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#CLIP`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`CLIP(
    items=[
        {
            "image_uri": "https://media.substrate.run/docs-fuji-red.jpg",
        },
        {
            "image_uri": "https://media.substrate.run/docs-fuji-blue.jpg",
        },
    ],
    collection_name="smoke_tests",
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "embeddings": [
    {
      "vector": [
        -0.035030052065849304,
        -0.04128379374742508,
        0.05782046541571617
      ],
      "doc_id": "c9de81fb98804ce0afb2b8ac17c0799b"
    },
    {
      "vector": [
        0.0003024724137503654,
        -0.025219274684786797,
        -0.009984994307160378
      ],
      "doc_id": "c4464f69c93946a896925589681d38b4"
    }
  ]
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"CLIP"}</>
  );
}

export function FindOrCreateVectorStore() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"FindOrCreateVectorStore"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {
            "Find a vector store matching the given collection name, or create a new vector store."
          }
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#FindOrCreateVectorStore`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`FindOrCreateVectorStore(
    collection_name="smoke_tests",
    model="jina-v2",
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "collection_name": "smoke_tests",
  "model": "jina-v2"
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"FindOrCreateVectorStore"}</>
  );
}

export function ListVectorStores() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"ListVectorStores"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {"List all vector stores."}
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#ListVectorStores`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`ListVectorStores()
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "items": [
    {
      "collection_name": "comments",
      "model": "jina-v2"
    },
    {
      "collection_name": "images",
      "model": "jina-v2"
    }
  ]
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"ListVectorStores"}</>
  );
}

export function DeleteVectorStore() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"DeleteVectorStore"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {"Delete a vector store."}
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#DeleteVectorStore`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`DeleteVectorStore(
    collection_name="fake_store",
    model="jina-v2",
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "collection_name": "comments",
  "model": "jina-v2"
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"DeleteVectorStore"}</>
  );
}

export function QueryVectorStore() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"QueryVectorStore"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {"Query a vector store for similar vectors."}
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#QueryVectorStore`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`QueryVectorStore(
    collection_name="smoke_tests",
    model="jina-v2",
    query_strings=[
        "gas",
        "metal",
    ],
    top_k=1,
    include_metadata=True,
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "results": [
    [
      {
        "id": "483e75021c9d4ad69c3d78ace76da2ea",
        "distance": -0.78324556350708,
        "metadata": {
          "doc": "group: 18\n\nArgon is the third most abundant gas in Earth's atmosphere, at 0.934% (9340 ppmv). It is more than twice as abundant as water vapor.",
          "group": "18",
          "doc_id": "483e75021c9d4ad69c3d78ace76da2ea"
        }
      }
    ],
    [
      {
        "id": "dd8f3774e05d42caa53cfbaa7389c08f",
        "distance": -0.74278724193573,
        "metadata": {
          "doc": "group: 8\n\nOsmium is the densest naturally occurring element. When experimentally measured using X-ray crystallography, it has a density of 22.59 g/cm3. Manufacturers use its alloys with platinum, iridium, and other platinum-group metals to make fountain pen nib tipping, electrical contacts, and in other applications that require extreme durability and hardness.",
          "group": "8",
          "doc_id": "dd8f3774e05d42caa53cfbaa7389c08f"
        }
      }
    ]
  ],
  "collection_name": "comments",
  "model": "jina-v2"
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"QueryVectorStore"}</>
  );
}

export function FetchVectors() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"FetchVectors"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {"Fetch vectors from a vector store."}
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#FetchVectors`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`FetchVectors(
    collection_name="smoke_tests",
    model="jina-v2",
    ids=[
        "dd8f3774e05d42caa53cfbaa7389c08f",
    ],
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "vectors": [
    {
      "id": "dd8f3774e05d42caa53cfbaa7389c08f",
      "vector": [
        0.036658343,
        -0.0066040196,
        0.028221145
      ],
      "metadata": {
        "doc": "group: 8\n\nOsmium is the densest naturally occurring element. When experimentally measured using X-ray crystallography, it has a density of 22.59 g/cm3. Manufacturers use its alloys with platinum, iridium, and other platinum-group metals to make fountain pen nib tipping, electrical contacts, and in other applications that require extreme durability and hardness.",
        "group": "8",
        "doc_id": "dd8f3774e05d42caa53cfbaa7389c08f"
      }
    }
  ]
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"FetchVectors"}</>
  );
}

export function UpdateVectors() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"UpdateVectors"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {"Update vectors in a vector store."}
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#UpdateVectors`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`UpdateVectors(
    collection_name="smoke_tests",
    model="jina-v2",
    vectors=[
        {
            "id": "dd8f3774e05d42caa53cfbaa7389c08f",
            "metadata": {
                "appearance": "silvery, blue cast",
            },
        },
    ],
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "count": 1
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"UpdateVectors"}</>
  );
}

export function DeleteVectors() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return isClient ? (
    <details className="inline" ref={ref} open={open}>
      <summary
        onClick={() => {
          setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
        className="font-mono text-sm text-[#6E42BD] cursor-pointer"
      >
        {"DeleteVectors"}
      </summary>
      <div className="absolute max-w-sm z-50 text-xs text-black bg-white rounded drop-shadow p-1">
        <ReactMarkdown className="text-xs p-2">
          {"Delete vectors in a vector store."}
        </ReactMarkdown>
        <div className="flex w-full text-[14px] text-[#ABA7A6] justify-between">
          <div className="">{"Example"}</div>
          <Link
            href={`https://substrate.run/nodes#DeleteVectors`}
            className="text-[14px] text-[#ABA7A6] underline"
            target="_blank"
          >
            {"API Reference"}
          </Link>
        </div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`DeleteVectors(
    collection_name="smoke_tests",
    model="jina-v2",
    ids=[
        "ac32b9a133dd4e3689004f6e8f0fd6cd",
        "629df177c7644062a68bceeff223cefa",
    ],
)
`}
        </div>
        <div className="text-[14px] text-[#ABA7A6]">{"Output"}</div>
        <div className="whitespace-pre px-2 pb-2 pt-1 font-mono text-[13px] overflow-x-auto">
          {`{
  "count": 2
}`}
        </div>
      </div>
    </details>
  ) : (
    <>{"DeleteVectors"}</>
  );
}
