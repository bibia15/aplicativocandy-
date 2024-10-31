const produtos = document.querySelectorAll('.produto');
const listaCarrinho = document.getElementById('lista-carrinho');
const totalElement = document.getElementById('total');
let total = 0;

produtos.forEach(produto => {
    const button = produto.querySelector('.adicionar');
    button.addEventListener('click', () => {
        const nome = produto.getAttribute('data-nome');
        const preco = parseFloat(produto.getAttribute('data-preco'));
        
        // Adiciona o produto ao carrinho
        const li = document.createElement('li');
        li.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
        listaCarrinho.appendChild(li);

        // Atualiza o total
        total += preco;
        totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
    });
});

document.getElementById('finalizar-compra').addEventListener('click', () => {
    if (total > 0) {
        alert('Compra finalizada! Obrigado pela sua compra!');
        listaCarrinho.innerHTML = '';
        total = 0;
        totalElement.textContent = `Total: R$ 0.00`;
    } else {
        alert('Seu carrinho está vazio.');
    }
});
