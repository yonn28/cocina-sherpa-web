/*
  Cocina Sherpa — datos del recetario.

  Para agregar una clase nueva:
  1. Crea la carpeta img/clase-XX/ y copia ahí las fotos que quieras mostrar.
  2. Copia un objeto de este arreglo, cambia el "id" a "clase-XX" y el "numero".
  3. Llena titulo, fecha, resumen, materiales, conceptos, pasos, recetas y galeria.
  4. Pega la transcripcion cruda (o un resumen) en "transcripcion".
  5. Guarda este archivo y recarga index.html. No hay que tocar nada mas.
*/

const CLASES = [
  {
    id: "clase-01",
    numero: 1,
    titulo: "Fondos, mirepoix y métodos de cocción",
    fecha: "2026-08-31",
    resumen:
      "Cortes de mirepoix, armado del bouquet garni, fondos claros y oscuros, la diferencia entre ebullición y hervor, y el arranque de una sopa asiática.",
    portada: "img/clase-01/pizarra-resumen.jpg",

    materiales: [
      "Tabla de picar y cuchillo de chef",
      "Envases pequeños para separar cada corte (mise en place)",
      "Recipiente aparte para desechos de cocina (no va a la caneca de basura)",
      "Zanahoria, cebolla, apio (célery), ajo porro / puerro",
      "Cilantro, perejil, laurel, tomillo, romero (con moderación)",
      "Hilo de cocina para amarrar el bouquet garni",
      "Huesos de ave y de res, bien pelados, de buena procedencia",
      "Jengibre, ajo, picante, ajonjolí negro, leche o crema de coco",
      "Tallarines de arroz",
      "Sal del Himalaya (uso decorativo) y sal de mesa",
    ],

    conceptos: [
      {
        titulo: "Corte mirepoix",
        texto:
          "Corte irregular de aproximadamente 1 cm de zanahoria, cebolla y apio. No importa que sea parejo en forma, pero sí en tamaño: si los trozos quedan de tamaños distintos, cada uno se cocina a un tiempo diferente y el fondo pierde uniformidad.",
      },
      {
        titulo: "Bouquet garni",
        texto:
          "Atado de hierbas (laurel, tomillo, tallos de apio y perejil, un poco de romero) amarrado firmemente con hilo. Se mete entero a la olla para perfumar el fondo. El romero se usa con moderación porque su sabor es muy invasivo.",
      },
      {
        titulo: "Concentración vs. expansión",
        texto:
          "Expansión: la cocción arranca en frío — el ingrediente entra a la olla junto con el agua fría y luego se enciende el fuego (así se hacen los fondos). Concentración: la cocción arranca en caliente — el sartén, el horno o el aceite ya están calientes antes de que entre el ingrediente (sellar una proteína, hacer una torta, freír un huevo). El arroz usa un método mixto: primero se sofríe y nacara el grano (concentración) y luego se agrega el agua (expansión).",
      },
      {
        titulo: "Ebullición vs. hervor",
        texto:
          "Ebullición: burbuja pequeña y suave que nace en el borde de la olla — es el punto correcto para cocinar un fondo, porque lo mantiene translúcido. Hervor (nape): burbuja grande que nace desde el fondo de la olla con fuerza, arrastra partículas de los ingredientes y genera turbidez. Un fondo hervido con fuerza queda turbio, no translúcido.",
      },
      {
        titulo: "Fondo claro, oscuro y translúcido",
        texto:
          "Fondo claro de ave: se hace con huesos crudos, sin rostizar. Fondo oscuro de ave: los huesos se rostizan en el horno hasta que tomen un color marrón (sin quemarse) — ese tostado es lo que oscurece y da sabor al fondo. Fondo de res: siempre queda oscuro, no existe un fondo claro de res. Fondo translúcido: solo se logra con pescado o ave, nunca con res.",
      },
      {
        titulo: "Calidad de los huesos",
        texto:
          "Los huesos deben venir de animales de buena procedencia, bien alimentados y bien cuidados. Un fondo que empieza a oler mal (a podrido, no a carne) es señal de que el animal no estaba en buenas condiciones — ese fondo se descarta, no tiene arreglo.",
      },
      {
        titulo: "Sabor vs. aroma",
        texto:
          "Los sabores se perciben en la lengua (retrogusto). Lo que sentimos en otras zonas de la boca o la garganta es aroma, y el cerebro lo interpreta como si fuera un sabor distinto. Por eso el olor de un plato es tan importante como su sabor real.",
      },
    ],

    pasos: [
      {
        titulo: "Mise en place",
        detalle:
          "Cortar la zanahoria, la cebolla y el apio en mirepoix (irregular, ~1 cm). Separar cada corte en su propio envase. Todo lo que se descarte (hojas, cáscaras) va al recipiente de desechos, no a la caneca.",
      },
      {
        titulo: "Armar el bouquet garni",
        detalle:
          "Juntar laurel, tomillo, un poco de romero y tallos de apio/perejil. Amarrar bien fuerte con hilo de cocina, como un atado compacto.",
      },
      {
        titulo: "Montar el fondo",
        detalle:
          "Colocar los huesos limpios y pelados en la olla junto con el mirepoix y el bouquet garni. Cubrir con agua fría — el arranque en frío es lo que define el método de expansión.",
      },
      {
        titulo: "Cocinar en ebullición suave",
        detalle:
          "Llevar a fuego hasta que aparezcan burbujas pequeñas en el borde de la olla (ebullición), nunca a hervor fuerte. Mantener así aproximadamente 35 minutos para un fondo corto, espumando si hace falta para que quede translúcido.",
      },
      {
        titulo: "Arrancar la sopa asiática",
        detalle:
          "En paralelo al fondo: sofreír jengibre y ajo a fuego medio, sin dejar que el ajo se queme (se amarga). Agregar cebolla y sal, luego el picante y el líquido/caldo.",
      },
      {
        titulo: "Terminar y emplatar",
        detalle:
          "Agregar tallarines de arroz, un chorro de limón y crema de coco; ajustar de sal sin miedo. Servir con ajonjolí negro por encima (no blanco, para que se note el contraste) y cebollín picado.",
      },
    ],

    recetas: [
      {
        nombre: "Fondo corto (claro / oscuro, de ave o de res)",
        notas:
          "Mirepoix + bouquet garni + esqueleto (huesos) + agua fría, cocido por expansión en ebullición suave durante ~35 minutos.",
      },
      {
        nombre: "Sopa asiática / sopa thai",
        notas:
          "Jengibre y ajo sofritos, cebolla, picante, caldo, tallarines de arroz, limón y crema de coco. Se sirve con ajonjolí negro y cebollín.",
      },
      {
        nombre: "Sopa fría de pepino o zucchini con menta",
        notas:
          "Pepino o zucchini licuado con un fondo saborizado con menta, colado y servido frío como entrada.",
      },
    ],

    galeria: [
      { src: "img/clase-01/pizarra-resumen.jpg", alt: "Pizarra con el resumen de la clase: fondos, mirepoix, bouquet, ebullición vs hervor" },
      { src: "img/clase-01/mise-en-place.jpg", alt: "Mise en place con todos los vegetales cortados en envases" },
      { src: "img/clase-01/corte-zanahoria-apio.jpg", alt: "Corte de zanahoria y apio en la tabla" },
      { src: "img/clase-01/bouquet-garni.jpg", alt: "Armando el bouquet garni con perejil, zanahoria y cebolla" },
      { src: "img/clase-01/juliana-pimenton.jpg", alt: "Pimentón cortado en juliana" },
      { src: "img/clase-01/corte-ajo-porro.jpg", alt: "Ajo porro cortado en aros finos" },
    ],

    videos: [
      {
        src: "video/clase-01/ajo-porro-enrollado.mp4",
        poster: "video/clase-01/ajo-porro-enrollado-poster.jpg",
        titulo: "Cómo enrollar el ajo porro",
        descripcion: "La hoja bien lavada se coloca sobre la parte blanca y se enrolla como un tabaquito antes de meterla a la olla.",
      },
      {
        src: "video/clase-01/sofrito-jengibre-ajo.mp4",
        poster: "video/clase-01/sofrito-jengibre-ajo-poster.jpg",
        titulo: "Sofrito de jengibre y ajo",
        descripcion: "Se sofríe a velocidad media para que el ajo no se queme ni se amargue, y luego entra la cebolla y la sal.",
      },
      {
        src: "video/clase-01/metodo-concentracion.mp4",
        poster: "video/clase-01/metodo-concentracion-poster.jpg",
        titulo: "Método de concentración, en vivo",
        descripcion: "Sellar la pechuga en el sartén bien caliente para que los jugos se queden adentro — el ejemplo real del concepto de concentración.",
      },
      {
        src: "video/clase-01/ajonjoli-sal-himalaya.mp4",
        poster: "video/clase-01/ajonjoli-sal-himalaya-poster.jpg",
        titulo: "Ajonjolí negro y sal del Himalaya",
        descripcion: "Por qué se usa ajonjolí negro y no blanco para que se note el contraste, y por qué la sal del Himalaya es solo decorativa.",
      },
      {
        src: "video/clase-01/impulsador-de-sabor.mp4",
        poster: "video/clase-01/impulsador-de-sabor-poster.jpg",
        titulo: "¿Qué es un impulsador de sabor?",
        descripcion: "No es sal ni azúcar: simplemente resalta los sabores que ya están en el plato.",
      },
      {
        src: "video/clase-01/emplatado-en-silencio.mp4",
        poster: "video/clase-01/emplatado-en-silencio-poster.jpg",
        titulo: "Emplatando en silencio",
        descripcion: "Por qué no se debe hablar sobre la comida ya servida al momento de emplatar.",
      },
      {
        src: "video/clase-01/historia-de-la-arepa.mp4",
        poster: "video/clase-01/historia-de-la-arepa-poster.jpg",
        titulo: "La historia de la arepa y la crema chantilly",
        descripcion: "De dónde viene realmente la arepa, y la anécdota del origen de la crema chantilly en un banquete real.",
      },
    ],

    transcripcionArchivo: "transcripciones/clase-01/completa.txt",

    transcripcion: `Cuando vayas a cortar el apio, vas a cortar solo la punta de la hoja y la hoja se va a un pote aparte, no a la caneca de basura (esa es "incontaminante" para el área de trabajo). La cebolla se corta de arriba hacia abajo sin separar la base, se le quita la primera cáscara por estar oxidada, y luego se hacen cortes de aproximadamente un centímetro.

Vamos a hacer un fondo pequeño oscuro y un fondo grande de vegetales para la próxima clase de salsas madres. Primero se cortan los mirepoix, se ponen los huesos de pollo en la olla y se enciende el fondo — se cocina en 35 minutos. Mientras se hace el fondo, se van escalfando tomates y haciendo salsa blanca para terminar a tiempo. El tallo de las hierbas sirve para una cosa (fondo, caldo) y la hoja para otra (ensalada); no conviene mezclarlos porque se desaprovecha el producto. Cuidado con la punta del cuchillo apoyada en el borde de la tabla, se puede partir. El romero se usa poco porque es muy invasivo de sabor. Las hierbas se lavan, se secan y se guardan en bolsa en la nevera, donde duran meses. El bouquet garni se arma con laurel, tomillo y romero, bien amarrado, para perfumar el fondo — atención con la menta o hierbabuena, todo lo que se cocine con ella termina sabiendo a pasta de dientes.

Si vas a licuar zucchini o pepino con todo y semillas, hay que colarlo. Se licúa con el fondo saborizado a menta, se cuela y se sirve frío como entrada: sopa fría de pepino o de zucchini.

¿Cuándo un fondo está saliendo mal? Cuando empieza a oler a podrido (no a carne fuerte, a podrido de verdad). Eso indica que el animal no tuvo una buena procedencia o alimentación. Los huesos de un animal mal criado huelen mal y no hay forma de arreglar ese fondo: sabe ácido. Por eso siempre hay que comprar productos de buena procedencia.

El método de cocción por expansión es aquel donde todo arranca en frío: el fondo se arma con agua fría desde el principio, porque los sabores se van soltando poco a poco en esa agua saborizada. La concentración arranca en caliente: el aceite del sartén ya está caliente cuando entra el huevo, la parrilla ya está caliente cuando entra la carne, el horno ya está caliente cuando entra la torta. El arroz usa un método mixto: primero se sofríe y nacara (concentración) y luego se agrega el agua (expansión).

El corte para el fondo se llama mirepoix: un centímetro, irregular. El tamaño importa porque afecta el tiempo de cocción — piezas de tamaños distintos en la misma olla se cocinan de forma dispareja. El bouquet garni es un atado de hierbas (puede llevar cilantro, romero, tomillo, laurel, hojas de apio) bien amarrado, que se mete a la olla para perfumar, no para dar sabor directo: eso se siente como aroma, no como sabor. Los sabores se sienten en la lengua (retrogusto); lo demás que "se siente" en la boca es aroma que el cerebro interpreta.

Los fondos se cocinan en ebullición, nunca en hervor. La ebullición es una burbuja suave y pequeña pegada al borde de la olla. El hervor (nape) es una burbuja grande que nace desde el fondo con fuerza y arrastra partículas de los ingredientes, generando turbidez — los fondos deben ser lo más translúcidos posible.

Los fondos de ave suelen ser claros. Para un fondo oscuro de ave se rostizan los huesos bien pelados en el horno hasta que tomen un color marrón, sin quemarse — ese tostado da el tono oscuro. El fondo de res siempre queda oscuro, no existe un fondo claro de res. Sí existen fondos translúcidos, pero se hacen con pescado o ave, nunca con res (si un menú promete "sopa translúcida de pescado" muy cara, hay que probarla con cuidado: a veces son solo vegetales salteados sobre un fondo translúcido).

Antes de empezar a cocinar se pregunta por alergias y condiciones alimentarias especiales, y cualquier malestar (mareo, corte) se avisa de inmediato.

Ponerle ajonjolí negro (no blanco) a una sopa asiática la hace ver mejor por el contraste de color; el ajonjolí le da profundidad de sabor sin picar. La sal del Himalaya es para presentación, no es más saludable que la sal de mesa.

Al emplatar conviene no hablar sobre la comida ya servida (la saliva tiene enzimas digestivas que pueden alterar el sabor mientras se sirve).

Un "impulsador de sabor" no es sal ni azúcar: simplemente resalta los sabores que ya están en el plato.

El primer registro histórico documentado de la arepa aparece en Venezuela, aunque el maíz y técnicas similares existían en varias partes de la región — con los mismos ingredientes básicos (maíz, agua, sal) es natural que distintas culturas lleguen a preparaciones parecidas.

La concentración es el método donde se sella una proteína en un sartén caliente para que los jugos se queden adentro en vez de salir hacia el sartén.

Para el ajo porro (puerro): se coloca la hoja abajo, bien lavada, sobre la parte blanca, y se enrolla como un tabaquito para que quede compacto.`,
  },
];
