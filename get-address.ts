export async function getAddress(cep: string) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

    const response = await fetch(url);
    const data = await response.json();


    return data;
  }  

