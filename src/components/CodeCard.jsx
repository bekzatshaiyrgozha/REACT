function CodeCard() {
  return (
    <pre className="code">
      <span className="kw">const</span> <span className="var">bekzat</span> = <span className="brace">{"{"}</span>{"\n"}
      {"  "}<span className="key">name</span>: <span className="str">"Bekzat Shaiyrgozha"</span>,{"\n"}
      {"  "}<span className="key">university</span>: <span className="str">"KBTU"</span>,{"\n"}
      {"  "}<span className="key">year</span>: <span className="num">4</span>,{"\n"}
      {"  "}<span className="key">role</span>: <span className="str">"Developer"</span>,{"\n"}
      {"  "}<span className="key">stack</span>: <span className="brace">[</span><span className="str">"React"</span>, <span className="str">"JavaScript"</span>, <span className="str">"Python"</span>, <span className="str">"SQL"</span><span className="brace">]</span>,{"\n"}
      {"  "}<span className="key">hobbies</span>: <span className="brace">[</span>{"\n"}
      {"    "}<span className="str">"building web apps"</span>,{"\n"}
      {"    "}<span className="str">"learning new things"</span>,{"\n"}
      {"    "}<span className="str">"coffee ☕"</span>{"\n"}
      {"  "}<span className="brace">]</span>,{"\n"}
      {"  "}<span className="key">openToWork</span>: <span className="kw">true</span>,{"\n"}
      <span className="brace">{"}"}</span>;{"\n\n"}
    </pre>
  );
}

export default CodeCard;
