try {
    const listaProdutosDisponiveis = [
        "Pão",
        "Leite",
        "Café",
        "Laranja",
        "Macarrão",
        "Sabonete",
        "Detergente"
    ];
    
    const listaArgumentos = process.argv.slice(2);
    
    const listaProdutosSolicitadosDisponiveis = listaProdutosDisponiveis.filter(produto => {
        return listaArgumentos.find(argumento => argumento === produto);
    });
    listaProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Nós temos este produto: ${produto}`));
    
    const listaProdutosSolicitadosNaoDisponiveis = listaArgumentos.filter(argumento => {
        return !listaProdutosDisponiveis.find(produto => produto === argumento);
    })
    
    listaProdutosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`Esse produto nós não temos: ${argumento}`));
    
    listaProdutosDisponiveis.sort();
    listaProdutosDisponiveis.forEach(produto => console.log(`Temos este produto disponível: ${produto}`));
}catch(e) {
    console.log("Não foi possível executar pedido de compra");
}