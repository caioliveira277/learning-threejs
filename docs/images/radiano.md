# Entendendo a rotação dos elementos no ThreeJS 🤔

### Conceito: 💡
No **ThreeJS** é utilizado valores radianos para manipular a rotação dos elementos. Seguindo essa lógica, devemos tabalhar com valores onde utilizamos **PI** para calcular o ângulo de rotação.

### Radianos:
Radiano é o nome dado à medida do **arco** de uma **circunferência** de raio **r**, quando tal arco também mede r, e pode ser relacionado ao ângulo central desse arco.

### PI: 
O número PI (π) é um número que representa o resultado da divisão entre o perímetro e o diâmetro de um círculo.<br>
É uma proporção numérica infinita, ou seja, sua sequência de números não tem fim. Por conta disso, o PI é classificado como um número irracional.<br>
Seu valor é **3,1415...**

### Rotacionando elementos em 90º:
Desenvolvi o desenho abaixo como forma de entendimento da utilização de valores com base no **PI**:

<img src="https://caioliveira277.github.io/learning-threejs/images/radiano.png" height="300" />

A ideia é que se o valor de **PI** é igual a **3,14** (arredondado) o que corresponde a **180°**, para rotacionar um elemento em **90°** é necessário dividir o valor de PI por 2. Obtendo dessa forma a metade dele, que seria igual a **1.57**

### Utiliando a ideia:
Passando esses conceitos para o **JS** em utilização do **ThreeJS**, teriamos o seguinte código em execução:
```ts
private setPlane(): void {
    const geometry = new PlaneGeometry(this.planeConfig.size, this.planeConfig.size);
    const material = new MeshLambertMaterial({ color: new Color('#DFBAFC') });
    const plane = new Mesh(geometry, material);

    plane.position.set(0, 0, 0);
    plane.geometry.rotateX(-Math.PI / 2) // Implementação do conceito de rotação ✌

    this.scene.add(plane);
}
```
Show! Dessa forma temos um elemento plano literalmente deitado no cenário. 🚀

### Mais um pouco explicação:
<img src="https://media.giphy.com/media/wqbAfFwjU8laXMWZ09/giphy.gif?cid=ecf05e47bz9m7flxjcm4jfiwyu139v2ii5p18o6kiarnd9i6&rid=giphy.gif&ct=g" width="120" height="120" />

Se você olhar bem a linha comentada do código acima, temos o seguinte valor sendo passado ```-Math.PI / 2```.<br>
O **-** (***menos***) passado junto ao cálculo, define o **angulo de rotação**, que nesse caso para a esquerda.<br>
**Math.PI** é uma constante disponibilizada no Javascript para obter o valor de **PI**, onde ao receber, divimos por **2**.

___
### Conclusão: 🚀
Essa foi a ideia para o meu entendimento sobre manipular a rotação de elementos no threejs, com isso, foi possível criar um elemento plano no cenário representando a superficie do ambiente

___
### Fontes:
[<ins>Rotação no ThreeJS</ins>](https://stackoverflow.com/questions/29907536/how-can-i-rotate-a-mesh-by-90-degrees-in-threejs)<br>
[<ins>Valores radianos</ins>](https://pt.khanacademy.org/computing/computer-programming/programming-natural-simulations/programming-angular-movement/a/angles-and-units)<br>
