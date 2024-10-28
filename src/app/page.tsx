"use client"
import { getAddress } from "../../get-address"


export default function Home() {
  let addres = "Rua teste"

  async function handleGetAdress() {
    try {
      const result = await getAddress("50771630")
      addres = result;

      console.log(result)
    } catch (error) {
      alert("Ocorreu um erro ao obter endereço")
    }

  }
  return (
    <div>
      <h1 className="text-4xl flex justify-center">Buscar endereço</h1>
      <form action="" className="flex flex-col items-center">
        <div>
          <label htmlFor="cep" className="block mb-1 mt-9 text-1xl font-bold text-neutral-950">CEP</label>
          <input type="text" name="cep" id="cep" placeholder="00000000" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="endereco" className="block mb-1 mt-2 text-1xl font-bold text-neutral-950">ENDEREÇO</label>
          <input type="text" name="cep" id="cep" placeholder="Rua" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="bairro" className="block mb-1 mt-2 text-1xl font-bold text-neutral-950">BAIRRO</label>
          <input type="text" name="cep" id="cep" placeholder="Bairro" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="cidade" className="block mb-1 mt-2 text-1xl font-bold text-neutral-950">CIDADE</label>
          <input type="text" name="cep" id="cep" placeholder="Cidade" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>        
      </form>
      <span className="">Endereço: {addres}</span>
      <button onClick={handleGetAdress}
        className="px-5 py-3 bg-blue-700 text-black rounded-xl">
        Obter Endereço
      </button>
      <div>

      </div>
    </div>
  );
}
