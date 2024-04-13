import FormLogin from "./components/Form";
import "./index.css";

function App() {
  return (
    <div className="bg-zinc-950 h-screen w-screen flex items-center  text-white font-Raleway">
      <div className="bg-[url('./assets/Imagem_principal.png')] bg-no-repeat bg-cover flex h-full w-[1226px] items-end ">
        <h2 className="pb-5 pl-9 text-3xl font-medium leading-[120%] text-white">
          Aprenda desenvolvimento <br />
          frontend do zero agora mesmo
        </h2>
      </div>

      <div className="bg-zinc-900 w-[550px] h-[550px] flex flex-col items-center justify-evenly m-auto rounded-lg">
        <h1 className="text-[40px] m-[-20px] font-semibold">
          Faça seu login <br /> na plataforma
        </h1>

        <FormLogin />
      </div>
    </div>
  );
}

export default App;
