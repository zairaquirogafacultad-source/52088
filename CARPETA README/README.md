# Analizador de Lógica Proposicional

## DESCRIPCIÓN DEL PROYECTO

Este proyecto consiste en un analizador que procesa un archivo de entrada input.txt con fórmulas de lógica proposicional, desarrollado utilizando ANTLR4 con JavaScript. El funcionamiento del programa consiste en:

**- Análisis léxico:**

El analizador recibe la fórmula desde el archivo input.txt y la procesa carácter por carácter para identificar los lexemas del lenguaje. Cada lexema es clasificado en un token específico definido en la gramática, como operadores lógicos, variables y paréntesis. Como resultado, se genera una tabla de lexemas y tokens, que incluye además la línea y columna donde cada elemento fue encontrado.

**- Análisis sintáctico:**

El analizador verifica que la estructura de la fórmula respete la gramática definida. Si es correcta, se construye un árbol de análisis sintáctico. En caso de errores, se indica la línea y causa del problema.

**- Construcción del árbol sintáctico:**

El árbol generado puede visualizarse en dos formatos: formato compacto tipo ANTLR y representación visual en forma jerárquica con el plugin de VS Code. Esto permite comprender cómo interpreta la estructura de la fórmula.

**- Traducción e interpretación:**

El analizador traduce la fórmula lógica a JavaScript. Una vez traducida, es ejecutada asignando valores a las variables, simulando el comportamiento de un intérprete básico. Finalmente, se muestra el resultado.

---

## ¿CÓMO INSTALAR EL PROYECTO?

Para poder usar este proyecto, primero hay que clonarlo o descargarlo y abrirlo en Visual Studio Code.

Para abrir el proyecto en VS Code ir a **File → Open Folder**:

![Imagen 1](images/1-IMAGEN.png)

Seleccionar la carpeta **analizador-logica-proposicional-52088**:

![Imagen 2](images/2-IMAGEN.png)

Luego entrar y seleccionar la carpeta **analizador-logica** y hacer click en Select Folder:

![Imagen 3](images/3-IMAGEN.png)

Una vez abierto el proyecto, abrir la terminal con **Ctrl + Ñ** e instalar las dependencias con:

```
npm install
```

![Imagen 4](images/4-IMAGEN.png)

---

## INSTRUCCIONES DE USO

El programa utiliza el archivo **input.txt** para leer la fórmula a analizar. Una vez que esté escrita la fórmula, desde la terminal ejecutar:

```
node index.js
```

Una vez ejecutado, el sistema realiza automáticamente:

- Análisis léxico
- Análisis sintáctico
- Construcción del árbol de derivación
- Traducción a JavaScript
- Ejecución del código interpretado

Así, muestra en consola:

- Tabla de lexemas y tokens
- Confirmación de si la entrada es válida o inválida
- Árbol sintáctico en formato texto
- Código JavaScript generado
- Resultado de la ejecución

![Imagen 5](images/5-IMAGEN.png)

![Imagen 6](images/6-IMAGEN.png)

Para probar distintos casos, se puede editar el archivo **input.txt**, guardar los cambios con **Ctrl + S** y volver a ejecutar `node index.js`.

## Para probar los ejemplos válidos e inválidos:
Los ejemplos se encuentran en la carpeta ejemplos:

EjemplosValidos.txt → fórmulas correctas
EjemplosNoValidos.txt → fórmulas con errores

Para probarlos:

1-Abrir el archivo correspondiente y copiar la fórmula que se quiere probar
2-Pegar la fórmula en el archivo input.txt
3-Guardar con Ctrl + S
4-Ejecutar en la terminal: node index.js



---

## ÁRBOL VISUAL

Para ver el árbol de forma gráfica, abrir el archivo **LogicaProp.g4** y presionar **F5**. Se abre un panel a la derecha con el árbol visual generado por el plugin ANTLR4.

> ⚠️ Importante: siempre ejecutar primero `node index.js` antes de presionar F5.

![Imagen 7](images/7-IMAGEN.png)
