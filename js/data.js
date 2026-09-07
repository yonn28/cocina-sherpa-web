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
  {
    id: "clase-02",
    numero: 2,
    titulo: "Salsas madres: pomodoro y bechamel, y cocción de pasta",
    fecha: "2026-09-07",
    resumen:
      "Las dos salsas madres de la clase: concassé de tomate para el pomodoro y roux para la bechamel. Además, brunoise de cebolla, pimentón y zanahoria, y la regla de oro de la pasta: se termina de cocinar dentro de la salsa.",
    portada: "img/clase-02/pizarra-resumen.jpg",

    materiales: [
      "Tabla de picar, cuchillo de chef y pelador",
      "Envases pequeños para separar cada corte (mise en place)",
      "Recipiente aparte para desechos de cocina",
      "Olla alta y ancha para la pasta, donde quepa entera sin quedar asomada",
      "Olla con agua hirviendo para escalfar los tomates",
      "Sartén u olla para la salsa, batidor y espátula",
      "Tomates maduros, cebolla, pimentón rojo largo, zanahoria",
      "Mantequilla y harina en partes iguales (para el roux)",
      "Leche de vaca, nuez moscada y sal",
      "Pasta seca, de una sola forma por tanda",
      "Queso para gratinar los vegetales",
    ],

    conceptos: [
      {
        titulo: "La pasta se termina en la salsa",
        texto:
          "Lo más importante de la clase a nivel de sabor: la pasta se cocina hasta el 90% en el agua y termina su cocción dentro de la salsa. Servir la pasta blanca y echarle la salsa encima se ve bien en una foto, pero es un error: cada bocado debería traer salsa, y no terminar con una sopa de salsa en el fondo del plato.",
      },
      {
        titulo: "Nada de aceite en el agua",
        texto:
          "El aceite flota y la pasta está en el fondo, así que mientras hierve no hace absolutamente nada. El problema aparece al colar: ahí sí la pasta se baña de aceite y la salsa deja de pegarse. Se gasta plata, no se gana nada y el plato sabe peor.",
      },
      {
        titulo: "El punto al dente",
        texto:
          "Hay que respetar el tiempo del paquete y quedarse un poco por debajo: si dice 11 minutos, son 10:39. La pasta debe poder doblarse sin romperse, pero sin llegar a plastilina — si al apretarla con los dedos se deshace como masa de arepa cruda, está sobrecocida y al pasarla por la salsa se convierte en compota. Lo seguro es probarla; en clase se sacó alrededor de los 9 minutos.",
      },
      {
        titulo: "Una sola forma de pasta por tanda",
        texto:
          "Cada forma de pasta necesita su propio tiempo de cocción, así que mezclar dos formas en la misma olla garantiza que una quede cruda o la otra pasada. Si hace falta más cantidad de la que cabe, la decisión correcta es hacer dos tandas, no llenar la olla.",
      },
      {
        titulo: "El roux y sus proporciones",
        texto:
          "Roux = mantequilla + harina en partes iguales. Es un espesante, no una salsa: es la base que permite construir varias. Con leche se convierte en bechamel; con un fondo, en otra salsa madre distinta. La proporción con el líquido es de 1 a 10: 50 g de mantequilla + 50 g de harina piden 500 ml de leche.",
      },
      {
        titulo: "Los clásicos no se cambian",
        texto:
          "No existe la bechamel de leche de almendras: la leche la dan los mamíferos, y de la almendra se saca un extracto (horchata). Se puede hacer una salsa blanca con otra base y está perfecto, pero llamarla bechamel es cambiar un clásico. Si el nombre tiene una definición, se respeta.",
      },
      {
        titulo: "De dónde viene la bechamel",
        texto:
          "Nace en la Francia del siglo XVII, hecha para un conde de apellido Béchameil. Su inspiración viene de más atrás: en la Florencia de los Medici ya se hacía una salsa espesa a base de crema de leche, leche y nuez moscada. Los franceses tomaron esa idea y la combinaron con el roux.",
      },
      {
        titulo: "Escalfar el tomate y concassé",
        texto:
          "Escalfar es sumergir el tomate en agua hirviendo para poder retirarle la piel sin sacrificar pulpa. Se le hace una cruz superficial en la base (el lado opuesto al tallo), solo sobre la piel: si se corta el tomate se rompe todo el proceso. Van de 45 segundos a minuto y medio, más si es mucho volumen, porque los tomates bajan la temperatura del agua de golpe. Después se pela, se despepita y lo que queda es el concassé.",
      },
      {
        titulo: "Perfilar antes de cortar",
        texto:
          "Un vegetal redondo se resbala y no deja sacar cortes parejos. La zanahoria se pela, se le cortan las dos puntas, se parte por la mitad y se le quitan los costados hasta dejar un bloque cuadrado. De ese bloque salen láminas, y de las láminas juliana, brunoise, petit brunoise o macedonia. Sin perfilar, todos esos cortes son imposibles.",
      },
      {
        titulo: "Pimentón rojo o amarillo",
        texto:
          "El rojo es el de la salsa y el guiso, porque aporta color. El amarillo es un punto más dulce y va mejor en ensalada. Lo mismo con la forma: el pimentón largo para salsa, el redondo y más carnoso para ensalada. No es capricho, es aprovechar mejor cada producto.",
      },
    ],

    pasos: [
      {
        titulo: "Mise en place y cortes",
        detalle:
          "Perfilar y cortar en brunoise la cebolla, el pimentón y la zanahoria, y separar cada corte en su propio envase. A la cebolla se le quita la cabeza y se le conserva la raíz para que no se desarme. Al pimentón se le retiran las venas; quitarle la piel superficial es opcional y solo sirve para bajarle el amargor.",
      },
      {
        titulo: "Escalfar los tomates",
        detalle:
          "Marcar una cruz superficial en la base de cada tomate, sin cortar la pulpa. Sumergirlos en agua hirviendo entre 45 segundos y minuto y medio. Sacarlos, pelarlos, retirarles la semilla y picarlos: eso es el concassé.",
      },
      {
        titulo: "Hacer la bechamel mientras hierve el agua",
        detalle:
          "Aprovechar el tiempo de espera. Fundir la mantequilla, agregar la misma cantidad de harina y cocinar el roux. Incorporar la leche en proporción 1 a 10 respecto a la mantequilla, sin dejar de batir, y sazonar con sal y nuez moscada — la nuez moscada es la que le da ese fondo aromático que recuerda a panadería y nueces.",
      },
      {
        titulo: "Montar la salsa pomodoro",
        detalle:
          "Sofreír el brunoise de cebolla, pimentón y zanahoria, agregar el concassé de tomate y dejar cocinar. Queda una salsa que después sirve igual para pasta, para carnes o para pescados.",
      },
      {
        titulo: "Cocer la pasta",
        detalle:
          "Agua abundante en una olla donde la pasta quepa entera, sin aceite. Una sola forma de pasta por tanda. Sacarla algo antes del tiempo del paquete y probarla para confirmar el punto.",
      },
      {
        titulo: "Terminar la pasta en la salsa",
        detalle:
          "Pasar la pasta escurrida directamente a la salsa y dejar que ahí complete el último tramo de cocción, absorbiendo sabor. Ese paso es el que cambia el plato.",
      },
      {
        titulo: "Gratinar los vegetales",
        detalle:
          "Napar los vegetales con la bechamel, cubrir con queso y gratinar.",
      },
    ],

    recetas: [
      {
        nombre: "Salsa pomodoro (salsa roja)",
        notas:
          "Brunoise de cebolla, pimentón y zanahoria sofrito, más concassé de tomate (escalfado, pelado y sin semilla). Sirve para pasta, carnes y pescados.",
      },
      {
        nombre: "Salsa bechamel",
        notas:
          "Roux de mantequilla y harina en partes iguales, más leche de vaca en proporción 1:10 (50 g + 50 g piden 500 ml). Sal y nuez moscada.",
      },
      {
        nombre: "Pasta terminada en salsa",
        notas:
          "Pasta cocida al 90% en agua sin aceite, escurrida y terminada dentro de la salsa pomodoro.",
      },
      {
        nombre: "Vegetales gratinados",
        notas:
          "Vegetales napados con bechamel, cubiertos de queso y gratinados.",
      },
    ],

    galeria: [
      { src: "img/clase-02/pizarra-resumen.jpg", alt: "Pizarra con el resumen de la clase: salsa roja pomodoro, escalfar tomates, concassé, roux y bechamel" },
      { src: "img/clase-02/juliana-pimenton.jpg", alt: "Pimentón rojo cortado en bastones sobre la tabla" },
      { src: "img/clase-02/mise-en-place.jpg", alt: "Mise en place con los brunoise separados en envases y los tomates listos" },
      { src: "img/clase-02/estacion-de-trabajo.jpg", alt: "Estación de trabajo con los vegetales y las ollas antes de empezar" },
      { src: "img/clase-02/salsa-pomodoro.jpg", alt: "La salsa de tomate cocinándose en la olla" },
    ],

    videos: [
      {
        src: "video/clase-02/punto-al-dente.mp4",
        poster: "video/clase-02/punto-al-dente-poster.jpg",
        titulo: "El punto exacto de la pasta",
        descripcion: "Se dobla sin romperse, pero no es plastilina. Si se pasa, al entrar a la salsa se convierte en compota.",
      },
      {
        src: "video/clase-02/escalfar-tomates.mp4",
        poster: "video/clase-02/escalfar-tomates-poster.jpg",
        titulo: "Escalfar los tomates",
        descripcion: "De 45 segundos a minuto y medio en agua hirviendo, más tiempo si es mucho volumen porque el agua baja de temperatura.",
      },
      {
        src: "video/clase-02/roux-y-bechamel.mp4",
        poster: "video/clase-02/roux-y-bechamel-poster.jpg",
        titulo: "Roux y bechamel: las proporciones",
        descripcion: "Mantequilla y harina en partes iguales, y leche a razón de 1 a 10: 50 g y 50 g piden 500 ml.",
      },
      {
        src: "video/clase-02/perfilar-zanahoria.mp4",
        poster: "video/clase-02/perfilar-zanahoria-poster.jpg",
        titulo: "Perfilar la zanahoria",
        descripcion: "Pelar, cortar las puntas, partir por la mitad y cuadrar el bloque. De ahí salen las láminas y de las láminas todos los cortes.",
      },
      {
        src: "video/clase-02/brunoise-de-cebolla.mp4",
        poster: "video/clase-02/brunoise-de-cebolla-poster.jpg",
        titulo: "Brunoise de cebolla",
        descripcion: "Cortes guía sin llegar al final, dejando un margen imaginario, y después el corte transversal con los dedos hacia arriba.",
      },
      {
        src: "video/clase-02/brunoise-de-pimenton.mp4",
        poster: "video/clase-02/brunoise-de-pimenton-poster.jpg",
        titulo: "Brunoise de pimentón",
        descripcion: "Quitar las venas, sacar los bastones y de ahí el brunoise. Retirar la piel superficial es opcional: solo baja el amargor.",
      },
      {
        src: "video/clase-02/salsa-pomodoro.mp4",
        poster: "video/clase-02/salsa-pomodoro-poster.jpg",
        titulo: "Una salsa que sirve para todo",
        descripcion: "La misma pomodoro se usa después para pastas, para carnes y para pescados.",
      },
    ],

    transcripcionArchivo: "transcripciones/clase-02/completa.txt",

    transcripcion: `La clase la dictan Sebastián, con diez años en el sector y paso por restaurantes con estrella Michelin como sous-chef y director de vinos, y su compañera, con formación en química de los alimentos, nutrición y metabolismo. El plan del día: dos salsas madres, la cocción básica de la pasta y los cortes que hay detrás de esas salsas.

Lo más importante del día a nivel de sabor es que la pasta se hace sin la salsa y se termina de hacer en la salsa. Eso es ley. Los italianos la cocinan al 90% y la terminan dentro de la salsa, porque la idea es que cada bocado de pasta traiga salsa, no que la salsa quede regada por ahí. La pasta blanca con la salsa encima se ve bonita en la foto, pero es un error gastronómico: te comes la pasta sola y abajo te queda una sopa. Y ponerle aceite al agua son varios errores juntos: el aceite flota mientras la pasta está en el fondo, así que no hace nada mientras hierve; cuando cuelas, la pasta se llena de aceite y ya no se le pega la salsa.

Sobre el punto: la olla tiene que ser lo bastante alta para que la pasta quepa entera y no quede asomada tres centímetros; hay que esperar a que se ablande y se asiente adentro. Con eso, los tiempos del paquete son confiables: si dice 11 minutos, son 10:39, no hay truco. Igual siempre se prueba para saber si es el al dente que a uno le gusta. En clase se sacó como a los 9 minutos. La pasta se tiene que poder doblar sin romperse, pero no puede ser plastilina: si le hago presión con los dedos y se deshace como masa de arepa cruda, no es lo que buscamos, porque después la vamos a pasar por la salsa y va a quedar una compota.

Otra cosa práctica: no mezclar formas de pasta distintas en la misma olla. La forma cambia el tiempo de cocción, así que si hay que usar más cantidad, la decisión correcta es hacer dos tandas. Mezcladas no van a quedar de calidad.

Los clásicos no cambian. No existe una bechamel de leche de almendras: la leche la dan los mamíferos, y de la almendra lo que se saca es un extracto, una horchata. Se puede hacer una salsa blanca con otra base, pero entonces es una salsa blanca, no una bechamel — la bechamel lleva roux. Cambiar un clásico es una barrabasada.

El roux es mantequilla y harina en partes iguales, y funciona como espesante: es lo que permite crear salsas. Con leche se vuelve bechamel; si en vez de leche le pones un fondo, creas una salsa totalmente distinta. Las proporciones con el líquido van de 1 a 10: si uso 50 gramos de mantequilla con 50 de harina, van 500 mililitros de leche. Se sazona con sal y nuez moscada, que aporta un sabor salado pero con esa parte aromática que recuerda a la panadería y a las nueces.

La bechamel nace en el siglo XVII en Francia, hecha para un conde de apellido Béchameil. El origen de la inspiración viene de más atrás: en Florencia, en la época de los Medici, la señora de la casa hacía una salsa espesa a base de crema de leche, leche y nuez moscada. Los franceses tomaron esa receta y la mezclaron con el roux.

Para la salsa roja hay que escalfar los tomates, que es meterlos en agua hirviendo para poder retirarles la piel sin sacar demasiada pulpa. Con un pelador o la punta del cuchillo se marca una cruz superficial en la parte de abajo, la opuesta al tallo, donde tiene el puntico. Es superficial: no queremos cortar el tomate, porque si lo cortamos rompemos todo el proceso de la salsa. Un corte un poco más largo hace más fácil trabajarlo después. Los tomates van al agua entre 45 segundos y minuto y medio, dependiendo de la cantidad; con mucho volumen hace falta bastante más agua y más tiempo, porque al entrar los tomates la temperatura del agua baja de golpe. Mientras el agua termina de hervir, se aprovecha para empezar la bechamel. Después se pela el tomate, se le saca la semilla y se descarta: la semilla no se usa para nada.

Para los cortes hay que perfilar. Un producto redondo es imposible de trabajar si se quiere sacar juliana, brunoise, petit brunoise o macedonia, porque siempre se queda de lado. A la zanahoria se le quita la primera piel con el pelador, se le cortan la parte superior y la inferior y se divide en dos; ahí se empieza a perfilar quitándole los costados hasta que quede como un cubo. De esa forma cúbica se sacan las láminas, y de las láminas, poniendo tres o cuatro una encima de otra, salen las julianas o el brunoise que se esté buscando.

A la cebolla se le quita la cabeza y se conserva la parte opuesta a los tallos, la de abajo, que es la que la mantiene unida. Se hacen las guías con la punta del cuchillo siguiendo la forma, sin llegar hasta el final, dejando un margen imaginario, y se hacen cortes hacia abajo; después va un corte transversal, siempre con la palma y los dedos hacia arriba para no cortarse, llegando hasta ese mismo margen. Al pimentón se le quitan las venas. La capita superficial se le puede retirar apoyando el cuchillo y haciendo un corte muy superficial — no es necesario, solo le baja un poco el amargor. Después se sacan los bastones y de ahí el brunoise.

Sobre los pimentones: el rojo se usa para el guiso y el amarillo para ensalada. El amarillo no da tanto color ni tiene la misma presencia visual en un guiso; en sabor es un poquito más dulce, pero es un toque, no una diferencia enorme. La distinción real es de mejor utilización del producto: el largo para salsa, el redondo y más carnoso para ensalada.

La chef también advirtió a los hombres del grupo sobre la semilla del tomate y la próstata, y recomendó hacerse chequeos médicos — vale la pena consultarlo con un médico antes de tomarlo como un hecho.

La salsa que quedó se puede utilizar después para pastas, para carnes y para pescados. El plato del día: pasta y vegetales gratinados.`,
  },
];
