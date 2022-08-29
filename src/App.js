import "./App.css";
import { RenderProps } from "./RenderProps";
import { ListCommentsComponent } from "./HOC/Component";
import { Bulleting } from "./Compound";
import { ListProviders } from "./Provider/Provider";
import { Lists } from "./Provider";
import { ControlledInput } from "./Controlled";
import { ChangeWindowSize } from "./Hooks";
import { ContainerView } from "./Container-View";
import { ConditionalRendering } from "./Conditionally-Rendering";

function App() {
  return (
    <div className="App">
      <h1>Render Props</h1>
      <RenderProps>
        {({ data }) => {
          return data.map((item, i) => <p key={i}>{item.name}</p>);
        }}
      </RenderProps>
      <ListCommentsComponent name="HOC" />
      <h1>Compound Components</h1>
      <Bulleting>
        <Bulleting.Item>Hello</Bulleting.Item>
      </Bulleting>
      <h1>Provider</h1>
      <ListProviders>
        <Lists />
      </ListProviders>
      <h1>Controlled Components</h1>
      <ControlledInput />
      <h1>Hooks Pattern</h1>
      <ChangeWindowSize />
      <h1>Container-View Pattern</h1>
      <ContainerView />
      <h1>Conditional-Rendering Pattern</h1>
      <ConditionalRendering />
    </div>
  );
}

export default App;
