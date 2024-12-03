import { ICardNews } from "@/interfaces";

export const cardsData: ICardNews[] = [
    {
      id: 'noticia-1',
      title: 'Resumen Jonu Media en Japan Weekend Madrid 2024',
      description:'Durante su presentación en la Japan Wekeend de Madrid, Jonu Media ha comentado algunas de sus novedades recientes. También ha habido tiempo para el anuncio de una nueva licencia: la serie Fairy Tail 100 Years Quest, cuyo manga es editado en nuestro país por Norma Editorial.',
      image: '/image/news/Fairy-tail-100-years-quest-descada.webp',
      tipo: 'noticia',
      contentItems:[
        { type: 'paragraph', content: 'Repasando sus títulos más recientes, mostraron varios tráilers y confirmaron las últimas fechas y ediciones que anunció el pasado mes de julio. También se hizo especial hincapié en el éxito de la serie Peligros en mi corazón, que ha sido muy vista en su plataforma y que contará pronto con una edición física de la primera temporada.' },
        { type: 'image', content: '/image/news/imagen-medio.webp' },
        { type: 'paragraph', content: 'Así mismo, la distribuidora también mostró de nuevo un vídeo comparando la versión original del anime Monster con la versión remasterizada que están creando. Aparte de esto, recordaron que esta nueva edición incluirá el aclamado doblaje clásico en castellano y también doblaje en catalán.' },
        { type: 'paragraph', content: 'Tampoco se olvidaron del cine. José Luis Puertas informó que la edición en físico de Komada – Aromas de Whisky, película estrenada en el Festival de Cine Internacional Fantástico de Sitges, llegará en 2025. Además, la cinta se subirá a su plataforma, Jonu Play.' },
        //{ type: 'video', content: 'https://www.youtube.com/embed/0AqLPLz6Rns?si=Ue0cLXg2qfDNm18L' },
      ]
    },
    {
      id: 'noticia-2',
      title: 'Lanzamientos Distrito Manga noviembre 2024',
      description:'Distrito Manga da a conocer su lista de lanzamientos para el mes de noviembre. La editorial manga de Penguin Random House G.E. comenzará dicho mes presentando una nueva publicación. Se trata del primer tomo de Lost Lad London, una historia de drama y misterio firmada por Shima Shinya cuyo primer tomo saldrá a la venta el 7 de noviembre en una edición en rústica de tapa blanda con sobrecubierta, de tamaño 128×180 mm y un precio de 9,95 euros este primer tomo.',
      image: '/image/news/lad-lost-london-destacado-1000x600.jpg',
      tipo: 'noticia',
      contentItems:[
        { type: 'paragraph', content: 'Este no será el único lanzamiento de Distrito Manga para el mes de noviembre. También saldrá a la venta en librerías el segundo tomo de Adabana de NON, el quinto volumen de After School Dice Club de Hiroo Nakamichi, el también quinto volumen de As the Gods Will: La secuela de Akeji Fujimura y Muneyuki Kaneshiro, el sexto tomo de El incidente Darwin de Shun Umezawa, el cuarto tomo de Mr. Mallow Blue de Akaza Samamiya y el cuarto tomo de Tenkaichi: La Batalla Definitiva de Yousuke Nakamaru y Kyoutarou Azuma.' },
        { type: 'image', content: '/image/news/imagen-medio.webp' }
      ]
    },
    {
      id: 'noticia-3',
      title: 'Abierta la suscripción para Dragon Ball Z Kai en Blu-ray',
      description:
        'Poco más de un mes para el 28 de octubre, día de lanzamiento del primer volumen de Dragon Ball Z Kai en formato físico. Selecta Visión abrió el pasado miércoles una suscripción en su tienda online para hacerse con la serie en formato Blu-ray Disc, la cual cuenta con una serie de ventajas con respecto a la compra individual de cada uno de las cajas que la componen. La primera de ellas es el ahorro de casi 20€ en el precio final, puesto que para la suscripción se realiza un único pago de 399€ frente a los 419,93€ que cuestan en total por separado (7 boxes a 59,99€ cada uno).',
      image: '/image/news/dragon-ball-z-kai-destacada.jpeg',
      tipo: 'noticia',
      contentItems:[
        { type: 'paragraph', content: 'Asimismo, aquellos que se suscriban recibirán los packs antes de su fecha de lanzamiento, siendo así los primeros en tenerlos. Además, también se incluirán los siguientes regalos exclusivos con las entregas nº 1, 3, 5 y 7' },
        { type: 'image', content: '/image/news/imagen-medio.webp' },
        { type: 'paragraph', content: 'Cada uno de los digipacks que componen la serie en Blu-ray Disc contienen los episodios de la serie con audio en japonés, castellano, catalán, euskera y gallego, además de contar con subtítulos en castellano. Además de esto, también incluyen una guía de episodios, así como 10 visual cartas coleccionables' },
      ]
    },
    {
      id: 'noticia-4',
      title: 'Primer tráiler en catalán de My Hero Academia: You’re Next',
      description:
        'A través de la cuenta en redes sociales de AnimeEnCat, Crunchyroll comparte el primer tráiler en catalán de la cuarta película de la franquicia My Hero Academia (Boku no Hero Academia). La cinta titulada My Hero Academia: You’re Next se estrenará en la gran pantalla a partir del 11 de octubre en versión original con subtítulos y con doblaje en castellano y catalán. Las entradas están a la venta desde este 25 de septiembre.',
      image: '/image/news/MyHeroAcademia_FIlm4_Portada.jpg',
      tipo: 'noticia',
      contentItems:[
        { type: 'paragraph', content: 'Tensai Okamura regresa para dirigir My Hero Academia: You’re Next bajo la producción del estudio Bones. Además, el equipo de producción formado por Yosuke Kuroda, Yoshihiko Umakoshi y Yuki Hayashi repiten en sus puestos de guionista, diseñador de personajes y compositor, respectivamente.' },
        { type: 'image', content: '/image/news/imagen-medio.webp' },
        { type: 'paragraph', content: 'Esta cuarta cinta basada en la obra del manga original Kohei Horikoshi cuenta con un argumento original enmarcado en una sociedad colapsada y comparte su línea temporal con el anime, por lo que se presume que sus eventos tienen lugar justo después del final de la 6ª temporada de la serie. La cinta se estrenó en la gran pantalla japonesa el pasado 2 de agosto de 2024.' },
      ]
    },
    {
      id: 'noticia-5',
      title: 'Abierta preventa Gold de Críticos de interespecies',
      description:
        'Este miércoles Jonu Media abrió una nueva preventa en su tienda online. Se trata de la Otaku Edition de la serie anime Críticos de interespecies, la cual ya se puede reservar a través de Jonu Play al precio de 39,99 euros, con gastos de envío incluidos. Este precio estará vigente mientras dure la preventa Gold, la cual será limitada por tiempo y unidades. Después pasará a preventa Silver a un precio 49,95 euros. La edición tiene previsto su lanzamiento el 13 de diciembre al precio de 59,95 euros.',
      image: '/image/news/criticos-de-interespecies-destacado.jpg',
      tipo: 'noticia',
      contentItems:[
        { type: 'paragraph', content: 'La edición coleccionista de Críticos de interespecies incluye la serie animada en un disco Blu-ray y dos discos DVD, con audio en japonés y español y subtítulos al español, así como también un libreto especial, cuatro tarjetas de arte, un sticker y un imán. Además, por reservar tu copia te llevará de regalo una lámina exclusiva y un cartel limitado.' },
        { type: 'image', content: '/image/news/imagen-medio.webp' },
        { type: 'paragraph', content: 'manga homónimo de Amahara en 12 episodios, que fueron emitidos en la televisión japonesa entre enero y marzo de 2020, tanto en una versión con censura como sin ella. El estudio Passione estuvo al cargo de la animación con Yuki Ogawa en la dirección y Kazuyuki Fudeyasu en el guion. Kotone Uchihigashi se encargó de la composición musical del anime.' },
      ]
    },
    {
      id: 'noticia-6',
      title: 'Abierta preventa Gold de Críticos de interespecies',
      description:
        'Atlus y Studio Zero lanzan una versión de demostración de Metaphor: ReFantazio para PC (Steam y Microsoft Store), Xbox Series, PlayStation 4 y PlayStation 5. Esta versión de prueba cubre el prólogo del título, contando con una duración aproximada de cinco horas y todo el progreso se trasladará a la versión completa. Metaphor: ReFantazio saldrá a la venta en el 11 de octubre de 2024 y estará disponible para PC (Steam y Microsoft Store), Xbox Series, PlayStation 4 y PlayStation 5.',
      image: '/image/news/Metaphor-ReFantazio.jpg',
      tipo: 'noticia',
      contentItems:[
        { type: 'paragraph', content: 'La historia de Metaphor: ReFantazio se desarrolla en Euchronia, un mundo de fantasía donde las personas deben luchar contra su propia ansiedad. En cuanto al sistema de magia, los habitantes de este mundo no pueden utilizar magia por sí mismos, ya que la magia requiere de una herramienta especial llamada encendedor, cuya posesión y uso requieren una licencia. Sin embargo, el protagonista y sus amigos despiertan y comienzan a dominar poderes mágicos que desafían esta convención y necesidad de encendedores.' },
        { type: 'image', content: '/image/news/imagen-medio.webp' },
        { type: 'paragraph', content: 'el cual es un poder secreto primordial que se despierta al enfrentarse al miedo y la ansiedad. Es decir, es el despertar de la naturaleza de un héroe que yace latente en el corazón de las personas. Todo esto recuerda al mismo concepto que sigue Atlus en la saga Persona. En cuanto al sistema de batalla, este combina a la perfección la acción en tiempo real y el combate por turnos. Además, la personalización del equipo a través de arquetipos proporciona a los jugadores la libertad de adaptar a su gusto la experiencia de juego.' },
      ]
    },
    {
      id: 'noticia-7',
      title: 'home de Asumiko Nakamura a la venta el 28 de octubre',
      description:
        'Atlus y Studio Zero lanzan una versión de demostración de Metaphor: ReFantazio para PC (Steam y Microsoft Store), Xbox Series, PlayStation 4 y PlayStation 5. Esta versión de prueba cubre el prólogo del título, contando con una duración aproximada de cinco horas y todo el progreso se trasladará a la versión completa. Metaphor: ReFantazio saldrá a la venta en el 11 de octubre de 2024 y estará disponible para PC (Steam y Microsoft Store), Xbox Series, PlayStation 4 y PlayStation 5.Ediciones Tomodomo pone fecha de lanzamiento a home, el tomo único de Asumiko Nakamura que anunció en su presentación en el pasado Japan Weekend Madrid. Este título estará disponible en puntos de venta a partir del 28 de octubre. Además, la editorial ya ha abierto la preventa de home en su página web.',
      image: '/image/news/home-destacado.jpg',
      tipo: 'noticia',
      contentItems:[
        { type: 'paragraph', content: 'El manga de home contará en su lanzamiento con una edición regular al precio de 9 euros y una edición especial. Esta última, además de incluir el tomo, incluye un stand acrílico, con la misma ilustración que el acrílico incluido en el pack limitado comercializado por la cadena de tiendas Animate en 2022, y una postal de regalo. El precio de esta edición especial es de 16 euros.' },
        { type: 'image', content: '/image/news/imagen-medio.webp' },
        { type: 'paragraph', content: 'Asumiko Nakamura continúa con las vidas de Sajô y Kusakabe con este tomo único titulado home, el cual fue publicado en la revista Opera de la editorial Akaneshinsha en 2022. La historia de este título se sitúa después del manga Blanc' },
      ]
    },
    {
      id: 'noticia-8',
      title: 'TOC de la Weekly Shônen Jump #43 2024',
      description:
        'Este lunes se pone oficialmente a la venta en Japón el número 43 de este año de la revista Weekly Shônen Jump. El semanario de Shueisha trae en portada una nueva serie: Hakutaku, de Kouki Ishikawa. El primer capítulo de esta nueva serialización, de más de 50 páginas, cuenta con páginas principales a color.',
      image: '/image/news/sakamoto-days.jpg',
      tipo: 'noticia',
      contentItems:[
        { type: 'paragraph', content: 'Kouki Ishikawa hace su debut en el magazine con una serie después de haber publicado one-shots en la revista. Hakutaku sigue a Hikuma, un joven que un día conoce a Noto, otro chico raro de su mismo instituto. Juntos, se embarcan en la creación de un videojuego que impresione a sus compañeros de clase, haciendo que sus vidas cambien por completo. La obra está disponible para leer simultáneamente en Manga Plus, aunque por el momento solo en inglés.' },
        { type: 'image', content: '/image/news/imagen-medio.webp' },
        { type: 'paragraph', content: 'En lo que respecta al ranking de popularidad, Sakamoto Days se hace esta semana con el número uno. Le siguen One Piece y La caja azul en segunda y tercera posición, respectivamente. En la parte de abajo, Undead Unluck continúa hundida en la parte baja de la tabla y se sitúa esta semana en la última posición.' },
      ]
    },
    {
      id: 'noticia-9',
      title: 'Level-5 atrasa Decapolice hasta 2026',
      description:
        'Level-5 celebró recientemente su evento Level-5 Vision 2024 titulado To the World’s Children, en el que ha presentado novedades de sus principales títulos de cara a los próximos años fiscales. Entre ellos, Decapolice, RPG policial futurista, que ha recibido un nuevo tráiler que confirma versión para Steam, la cual que se añade a las de PlayStation y Nintendo Switch, así como un gran atraso que mueve la nueva IP de 2024 a 2026.',
      image: '/image/news/DECAPOLICE-02-768x432.jpg',
      tipo: 'noticia',
      contentItems:[
        { type: 'paragraph', content: 'Durante la conferencia, presentada por el presidente y CEO de Level-5 Akihiro Hino en su versión animada, se hizo hincapié en la historia de Decapolice bajo un vídeo en el que se anunció el tema principal musical del juego, «City of Love» de la cantante MARiA, mitad del popular dúo GARNiDELiA.' },
        { type: 'image', content: '/image/news/imagen-medio.webp' },
        { type: 'paragraph', content: 'El tráiler muestra una gran cantidad de personajes nuevos que parece que tendrán especial relevancia en la futura trama de misterio del título, con énfasis en animales antropomórficos que habitan en la ciudad de DECASIM, ciudad virtual donde se desarrollarán las aventuras de Decapolice. Aún siendo una perfecta copia de la realidad, se trata de un lugar prohibido donde las memorias de crímenes pasados yacen dormidas.' },
      ]
    },
    {
      id: 'noticia-10',
      title: 'Tráiler del live-action de Sexy Cosplay Doll',
      description:
        'La cadena de televisión japonesa MBS ha compartido un primer tráiler de la serie de imagen real basado en el manga Sexy Cosplay Doll (Sono Bisque Doll wa Koi wo suru). En el adelanto de treinta segundos de duración se puede escuchar un fragmento del tema de inicio «Princess Hero» interpretado por Chō Tokimeki Sendenbu. Esta adaptación live-action de la obra de Shinichi Fukuda se estrenará el 8 de octubre en el bloque Dramaism de la cadena MBS.',
      image: '/image/news/SexyCosplayDollLA_portada.jpg',
      tipo: 'noticia',
      contentItems:[
        { type: 'paragraph', content: 'dirige la serie bajo la producción de Kyōdō Television. Por su lado, Satoko Okazaki se encarga del guion de esta adaptación a imagen real, mientras que Riko Nagase y Kōta Nomura interpretarán al dúo protagonista formado por Marin Kitagawa y Wakana Gojō, respectivamente' },
        { type: 'image', content: '/image/news/imagen-medio.webp' },
        { type: 'paragraph', content: 'Shinichi Fukuda comenzó la publicación del manga Sono Bisque Doll wa Koi wo suru, título original en japonés, en enero de 2018 en la revista Young Gangan de Square Enix. La obra permanece abierta a fecha de este texto con 13 tomos recopilatorios, habiendo  regresado a la revista Young Gangan el pasado 17 de mayo tras cambiar de periodicidad de manera temporal. La serie superó los 10 millones de copias en octubre de 2023 y sigue disfrutando de bastante popularidad.' },
      ]
    },
    {
      id: 'articulo-1',
      title: 'Megumi Fushiguro – Jujutsu Kaisen – Maximatic',
      description:'Bienvenidos de nuevo a Bellezas en miniatura, la sección de Ramen Para Dos en la que os mostramos algunas de las mejores figuras que llegan a nuestro país. En esta ocasión vamos a analizar en profundidad la figura de Megumi Fushiguro, uno de los principales protagonistas de Jujutsu Kaisen dentro de la línea MAXIMATIC de Banpresto. Una figura prepintada y esculpida en PVC/ABS, que mide unos 13 centímetros. También recordaros que esta figura podéis conseguirla a través de la página web oficial de Banpresto España.',
      image: '/image/news/megumi-1-scaled.jpg',
      tipo: 'articulo',
      contentItems:[
        { type: 'paragraph', content: 'Gege Akutami comenzó la publicación de Jujutsu Kaisen en marzo de 2015 en las páginas de la revista Weekly Shônen Jump de Shueisha., donde sigue actualmente. Los capítulos de la serie están recopilados en 26 volúmenes recopilatorios. Además de estos tomos, Akutami también publicó un volumen 0 titulado  Jujutsu Kaisen 0, que sirve como precuela. El manga de Jujutsu Kaisen está siendo editado en España por Norma Editorial tanto en español como en catalán. La misma editorial también ha publicado y traducido al castellano el manga precuela Jujutsu Kaisen 0, así como las dos novelas pertenecientes a la franquicia.' },
        { type: 'image', content: '/image/news/imagen-medio.webp' },
        { type: 'paragraph', content: 'La popularidad de la obra aumentó a partir de 2020 cuando se estrenó en Japón la adaptación animada. El anime de Jujutsu Kaisen se emitió entre octubre y marzo de 2021, contando con 24 episodios animados por el estudio  MAPPA. Además, la segunda temporada se estrenó en verano de 2023, finalizando con 24 capítulos.' },
      ]
    },
    {
      id: 'articulo-2',
      title: 'Japón Perdido',
      description:'Japón es un país de contrastes. Entre lo antiguo y lo moderno. Entre la tradición y el cambio. Muchos autores a lo largo de los años han escrito sobre este lejano país y sus contrastes pero pocos como el orientalista y experto en Japón Alex Kerr con su Japón Perdido. A través de sus páginas el autor americano nos habla de su vida y experiencias en el país del sol naciente. Para ello el autor no dudó en ensalzar y en criticar de igual manera el cuidado de las tradiciones y cambios que sufre el país.',
      image: '/image/news/banner-japon.jpg',
      tipo: 'articulo',
      contentItems:[
        { type: 'paragraph', content: 'A mediados de la década de los sesenta, Alex Kerr llegó por vez primera a Japón de la mano de su padre, un oficial de la armada norteamericana. En su retina quedó fijada la imagen de un país bello que, sobre todo en sus zonas rurales, transmitía una sensación de magia e irrealidad, como si un pedazo de historia se hubiera congelado en el apogeo de su hechizo. En sus visitas posteriores, la obsesión de Kerr por Japón fue aumentando y desde 1977 reside en el país, donde ha desarrollado un trabajo concienzudo de recuperación y conservación del viejo Japón, para contribuir a que la ola de la modernidad no erosione lo que queda de la tradición. Así, Kerr ha trabajado en programas para la restauración de casas rurales, ha fomentado el cultivo de artes como la caligrafía o el teatro kabuki y, en definitiva, se ha implicado en mantener vivo un Japón que se difumina.' },
        { type: 'image', content: '/image/news/imagen-medio.webp' },
        { type: 'paragraph', content: 'Japón Perdido es el libro perfecto para encender la chispa del interés por el Japón tradicional. A través de catorce capítulos, el autor nos narra su vida y experiencias en ese lejano país. Desde algo tan mundano como preparar un viaje, a arreglar unas máscaras de kabuki, Kerr consigue crear una obra a medio camino entre una guía y un diario que se ha convertido en un libro de referencia para entender al país.' },
      ]
    },
    {
      id: 'articulo-3',
      title: 'Dragon Quest: The Hero Avan and the Dark Lord of Hellfire',
      description:'Tras año y medio de retraso ya se encuentra en librerías Dragon Quest: The Hero Avan and the Dark Lord of Hellfire, manga spinoff de Dragon Quest: The Adventure of Dai. Esta nueva historia tiene lugar 15 años antes de los hechos acaecidos en la obra original, y conoceremos, de primera mano, la aventura que vivió un joven Avan junto a sus compañeros, combatiendo a las fuerzas lideradas por el Señor Oscuro Hadler. Por tanto, es el momento de desgranar el primer tomo de este gran regalo para fans, sin spoilers.',
      image: '/image/news/dragon-quest_the-hero-avan-and-the-dark-lord-of-helfir.jpg',
      tipo: 'articulo',
      contentItems:[
        { type: 'paragraph', content: 'Va a ser muy complicado ser objetivo al hablar de una obra que proviene del universo de la serie de tu infancia. Para los fans de Dai (o Fly, como lo conocimos aquí) la historia de Avan y sus compañeros siempre estuvo plagada de huecos, y si bien teníamos una idea muy general de lo que sucedió en esa primera lucha contra el Ejército Oscuro, gracias a un capítulo especial del manga, y otro especial del remake del anime, todavía quedaba mucha historia por contar. También había curiosidad por conocer mejor a algunos personajes que ya aparecieron brevemente en la obra original.' },
        { type: 'image', content: '/image/news/imagen-medio.webp' },
        { type: 'paragraph', content: 'En este primer tomo, al principio, se vuelven a relatar algunos hechos que pudimos ver en el remake del anime de Dai. Estos hechos nos presentan a Avan, a su fiel compañero Roka, al reino de Carl, a la reina regente de este, Flora y, por supuesto, también se relata el primer enfrentamiento de Avan con Hadler, comandante del Ejército Oscuro.' },
      ]
    },
    {
      id: 'articulo-4',
      title: 'Yo soy tú, tú eres yo: El despertar de la saga Persona',
      description:'Esta obra nos relata toda la historia de la saga Persona desde sus orígenes hasta sus últimos proyectos. Un título que sin duda no puede faltar en la estantería de cualquier fan de la franquicia.',
      image: '/image/news/yo-soy-tu-tu-eres-yo-3d.jpg',
      tipo: 'articulo',
      contentItems:[
        { type: 'paragraph', content: 'Lo que encontraréis en las páginas de este libro, a mi parecer, es un trabajo exhaustivo de investigación que profundiza desde el origen hasta el momento actual en que se encuentra la saga. Ahondando en diversos aspectos como los problemas que ha sufrido Atlus en su historia como compañía, como surgió el título estrella de esta empresa que más tarde daría origen a Persona, e incluso las personalidades que han participado en los proyectos de la saga.' },
        { type: 'image', content: '/image/news/imagen-medio.webp' },
        { type: 'paragraph', content: 'Pero eso no es todo, también sabremos de dónde vienen los cimientos sobre los que se asienta Persona, ahondando en conceptos desconocidos como puede ser la psicología junguiana y otros más conocidos como el tarot.' },
      ]
    },
    {
      id: 'articulo-5',
      title: 'CometCon’ 24',
      description:'El pasado fin de semana Gijón se convirtió en la capital del norte del país del ocio alternativo. A pesar de la lluvia, la CometCon volvió a llenar sus pabellones en una nueva edición que hizo las delicias de los amantes del videojuegos, la fantasía, la literatura, el cómic, el cosplay, la música, y un largo etcétera. Un evento donde los artistas volvieron a ser los grandes protagonistas.',
      image: '/image/news/CometCon-24.jpg',
      tipo: 'articulo',
      contentItems:[
        { type: 'paragraph', content: 'El evento volvió a celebrarse como viene siendo habitual en el recinto Ferial Luis Adaro, donde tienen lugar las grandes ferias de la región y con amplia capacidad para citas multitudinarias. Un sitio ideal para acoger a la cantidad de asistentes que se dieron cita en el evento para disfrutar de su mayor pasión ya fuera el cosplay, los videojuegos, el manga, el anime, la fantasía, etc.' },
        { type: 'image', content: '/image/news/imagen-medio.webp' },
        { type: 'paragraph', content: 'La CometCon se celebró principalmente en tres edificios del recinto. Nada más entrar, a la derecha, se encontraba el pabellon de gaming para las competiciones de videojuegos. Solamente con entrar se respiraba el aire competitivo detrás de las pantallas de los ordenadores. Al lado de este edificio, se encontraba en el primer piso la zona de juegos indies, así como la zona de consolas. Siempre resulta gratificante caminar por esta zona y ver como las distintas generaciones de jugadores, incluso padres e hijos, disfrutan juntos de los videojuegos. Aquí se podía jugar desde la Nintendo NES, distintas generaciones de Playstation, hasta las últimas consolas del mercado. En este caso, las que más triunfaron eran aquellas que tenían juegos de lucha como el Dragon Ball FighterZ, Jump Force o Tekken. Porque no hay mejor forma de soltar adrenalina que dándose unos sopapos virtuales con tu mejor amigo.' },
      ]
    },
    {
      id: 'articulo-6',
      title: 'Villains are destined to die',
      description:'La vida a veces puede ser muy dura, en especial cuando tu familia te rechaza, hecho que sufre la protagonista de Villains are destined to die, y no solo una vez si no dos. ¿Dos? Sí, tanto en su vida normal como en esta nueva y extraña vida en la que es Penelope Eckhart, la villana y protagonista de la ruta difícil del otome Daughter of the Duke Love Project. Pero… ¿cómo ha acabado dentro de este videojuego encarnando a la villana? ¿Y qué tendrá que hacer para sobrevivir? Habrá que seguir leyendo para ver cómo progresa la historia de Penelope.',
      image: '/image/news/Villains-are-destined-to-die.jpeg',
      tipo: 'articulo',
      contentItems:[
        { type: 'paragraph', content: 'La historia de este manhwa comienza con un pequeño prólogo en el que se nos presenta el videojuego otome Daughter of the Duke Love Project, en el que la trama gira en torno a una joven noble hija de un duque que desapareció hace seis años y que ahora ha aparecido para ocupar el lugar que le corresponde, al ser un otome tiene cinco rutas diferentes con diversos intereses amorosos, y cómo no una villana, llamada Penelope Eckhart. También se dan un par de pinceladas sobre la vida de la protagonista, hasta que te revelan que esta ha pasado a ser Penelope.' },
        { type: 'image', content: '/image/news/imagen-medio.webp' },
        { type: 'paragraph', content: 'Tras esto, comienza la verdadera historia donde se nos presenta a una protagonista sin nombre quien lo ha pasado muy mal en la vida a causa de que su familia siempre la ha tratado mal por ser la hija ilegítima. Pero eso forma parte del pasado ya que ha logrado irse a vivir sola. Por recomendación de sus amigas de la universidad decide comenzar un nuevo juego otome, y tras pasárselo le indican que si quiere saber el final verdadero debe o bien pagar o conseguirlo de manera gratuita jugando la ruta difícil, y es que en la ruta difícil la protagonista es la villana Penelope Eckhart.' },
      ]
    },
    {
      id: 'articulo-7',
      title: 'Resumen de la entrevista a Pika Ediciones',
      description:'Este martes 10 de septiembre, a través del canal de RamenParaDos en Twitch tuvo lugar una entrevista a Pika Ediciones, la nueva editorial manga que aterrizará este otoño en nuestro país. Durante la entrevista contemos con la presencia de Ana Belén Herrera y Jorge del Río, editora y jefe de marca de la editorial, respectivamente. A continuación os dejamos un resumen de la entrevista que podéis disfrutar completa en nuestro canal de Youtube.',
      image: '/image/news/Resumen-de-la-entrevista-a-Pika-Ediciones.png',
      tipo: 'articulo',
      contentItems:[
        { type: 'paragraph', content: 'La editora comenta que el Grupo Anaya, filial de Hachette Livre en España, une fuerzas con la editorial francesa Pika Édition (también pertenciente al grupo Hachette Livre), para lanzar este nuevo sello manga. «La filial francesa se encarga de todo el tema de producción y tema gráfico, mientras que Grupo Anaya se encarga de la distribución. Además, nosotros empezamos a mantener conversaciones con editoriales japonesas como Kodansha gracias a los años de trabajo previo por parte de la editorial francesa».' },
        { type: 'image', content: '/image/news/imagen-medio.webp' },
        { type: 'paragraph', content: 'Ana Belén Herrera matiza que la maquetación y la traducción de los tomos se realiza desde España. En concreto ha confirmado que actualmente están trabajando con Daruma Serveis Lingüístics.' },
      ]
    },
    {
      id: 'articulo-8',
      title: 'Shin Megami Tensei V Vengeance',
      description:'Cuando terminé Shin Megami Tensei V en 2021 supuse que Atlus publicaría en poco tiempo la versión definitiva del juego. Ya sé que la compañía lleva perpetuando esta tradición desde PlayStation 2, pero en este caso había algo más: la quinta entrega de la franquicia Megaten estaba incompleta. Quién sabe si deliberadamente para ofrecer un producto redondo años después, o por falta de tiempo durante el desarrollo',
      image: '/image/news/Shin-Megami-Tensei-V-Vengeance.jpg',
      tipo: 'articulo',
      contentItems:[
        { type: 'paragraph', content: 'La cuestión es que recibimos una narrativa extraña, imantada en un universo donde los acontecimientos eran poco orgánicos. No hay más que fijarse en la radicalización de sus personajes, quienes pasaban de la neutralidad al extremismo en cuestión de minutos. Quiero decir, Ichiro Dazai y Yuzuru Atsuta eran un par Formula 1 del fascismo: en pocas escenas pasaban de la inocencia estudiantil a ser capaces de justificar un genocidio —no es broma—. Y claro, como jugador te encontrabas atrapado en los delirios de unos y otros, teniendo que elegir un ideal para obtener el final que «más compatible sea contigo». Vengeance solventa algunos de estos problemas, pero en el camino desorganiza piezas que deberían haber permanecido estáticas.' },
        { type: 'image', content: '/image/news/imagen-medio.webp' },
        { type: 'paragraph', content: 'Al empezar la partida, podremos elegir entre el Canon de la Creación, que sigue los acontecimientos del juego base, o el Canon de la Venganza, con una historia completamente nueva que aprovecha ciertos personajes y acontecimientos de la trama original para subvertirlos u ofrecerles nuevos roles. Dado que hay mucha tela que cortar, este análisis irá orientando a la segunda opción; si tienes interés en saber qué opinamos en su día sobre la ruta original, puedes leer el análisis de Shin Megami Tensei V siguiendo este enlace.' },
      ]
    },
    {
      id: 'articulo-9',
      title: 'BJ Alex',
      description:'El mundo del streaming ha facilitado el ocio en muy pocos años. Actualmente, uno puede entretenerse de cualquier manera con los streamers disponibles en la red y con temáticas muy variadas. Sin embargo, ¿qué pasaría si uno de tus amados streamers estuviera al alcance de tu mano? ¿Qué serías capaz de hacer o, mejor, dejarte hacer? Sed bienvenidos al show de BJ Alex y no olvidéis darle a “Me gusta”.',
      image: '/image/news/BJ-Alex.png',
      tipo: 'articulo',
      contentItems:[
        { type: 'paragraph', content: 'BJ Alex es un manwha boys love creado por Mingwa. Empezó la publicación de la obra a través de la plataforma digital Lenzhin en 2017, finalizando con ochenta y tres capítulos y un especial que salió más tarde. Posteriormente la obra fue recopilada en nueve volúmenes.' },
        { type: 'image', content: '/image/news/imagen-medio.webp' },
        { type: 'paragraph', content: 'En septiembre de 2023 y tras meses de rumores confirmando la licencia de la obra de Mingwa en España, Panini Cómics anunció su publicación. Tras la llegada del manwha en el mes de diciembre, actualmente cuenta con cuatro tomos en el mercado.' },
      ]
    },
    {
      id: 'articulo-10',
      title: 'Clover Ed. Integral (Norma)',
      description:'Toda historia tiene dos versiones. A veces, al vivirla y formar parte de ella podemos llegar a ignorar la otra parte pero, en realidad, es una versión que siempre estará ahí. Puedes creer conocer a una persona y sus circunstancias pero, aún tiempo después de perder el contacto con el susodicho, puedes encontrar ese otro fragmento que complete tu historia. Incluso puedes llegar a conocer la motivación de sus acciones que, tal vez, provengan de uno de sus deseos.',
      image: '/image/news/Clover-Ed.-Integral.jpg',
      tipo: 'articulo',
      contentItems:[
        { type: 'paragraph', content: 'Clover, de CLAMP, es un manga que regresa a las librerías españolas de la mano de Norma Editorial y en la que se nos muestra cómo los deseos pueden ser la motivación para que una persona luche un poco más por su vida. Una historia llena de anhelos, esperanzas, amor y, en especial, unos sueños que son capaces de hacerse realidad.' },
        { type: 'image', content: '/image/news/imagen-medio.webp' },
        { type: 'paragraph', content: 'La historia que se narra en Clover se desarrolla en un futuro distópico y nos presenta una trama muy simple: Kazuhito, un exsoldado que debe llevar a una joven hasta el Parque de las Hadas. Sin embargo, para entender un poco esta historia debéis entender su contexto. El mundo en el que se desarrolla Clover no es como el nuestro. En esa realidad algunas personas nacen con poderes mágicos que les permiten controlar la tecnología, algo que les permite, por ejemplo, el poder teleportarse o hacer aparecer armas, tal y como se observa en la historia. A la gente que nace con estos poderes se las marca con un tatuaje de trébol, en el que el gobierno indica su nivel de poder con el número de hojas. Aquellos que tengan una hoja serán los más débiles mientras que los de cuatro serán los más poderosos. Este gobierno, formado por un consejo de ancianos llamado «Trébol de cinco hojas», está formado por cinco tréboles de una hoja, que se protegen de quien pueda superarles en poder, por lo que no permiten que los tréboles que tengan más de cuatro hojas o que estos se enamoren o hagan amistad con otros como ellos.' },
      ]
    },
    {
      id: 'ultimo-1',
      title: 'La película de Me & Roboco se estrenará en abril',
      description: 'se ha confirmado la fecha de estreno de la película, el 18 de abril de 2025. Además, junto a este se ha presentado un nuevo póster promocional. La obra, que se titulará Me & Robocco, la película, tenía programado su estreno en invierno, pero ha ido retrasándose hasta la próxima primavera.',
      image: '/image/news/Me-and-Roboco.jpg',
      tipo: 'ultima',
      contentItems:[
        { type: 'paragraph', content: ' dirige esta comedia para Studio Gallop con Michihiro Sato como asistente en la dirección. Sayuri Ooba (La asesina del romance) es la encargada de la supervisión de los guiones junto a Yūko Ebara como diseñador de personajes. Por otro lado, Manami Koyama es el director de arte de este anime con Ayami Minowa como diseñadora de color y Rena Tanimoto directora de fotografía. Kazuya Tanaka es el director de sonido.' },
        { type: 'image', content: '/image/news/imagen-medio.webp' },
        { type: 'paragraph', content: 'Shuhei Miyazaki escribe esta comedia de gaps titulada Boku to Roboko, conocida internacionalmente como Me & Roboko. La obra se lleva serializando en las páginas de la revista Weekly Shônen Jump de Shueisha desde el 6 de julio de 2020, permaneciendo abierta con un total de 18 tomos recopilatorios en el mercado japonés. El manga fue nominado en la categoría de Mejor Manga Impreso en los Premios Next Manga 2021 y se ubicó en el puesto 13 de 50 nominados.' },
      ]
    },
    {
      id: 'Reciente-1',
      title: 'Nuevo tráiler de El profesor Layton y el Nuevo Mundo a vapor',
      description: 'la compañía Level-5 desveló un nuevo tráiler del videojuego El profesor Layton y el Nuevo Mundo a vapor. El vídeo, con subtítulos en inglés, presenta nueva información sobre esta esperada nueva entrega y confirma la fecha de salida de este. Esta nueva entrega de la popular saga de puzles saldrá a lo largo de 2025 para Nintendo Switch.',
      image: '/image/news/Layton_3.jpg',
      tipo: 'reciente',
      contentItems:[
        { type: 'paragraph', content: 'El tráiler confirma el regreso del actor de doblaje Yoi Izumi como el profesor Layton y la incorporación de la actriz Mio Imada como Luke Triton. Además, el vídeo muestra nuevas escenas de jugabilidad, así como un renovado aspecto en 3D. Por último, el videojuego contará con puzles desarrollado por el equipo japonés QuizKnock, un grupo japonés dedicado a la mezcla de entretenimiento y conocimiento con un canal de YouTube de más de dos millones de seguidores.' },
        { type: 'image', content: '/image/news/imagen-medio.webp' },
        { type: 'paragraph', content: 'Los hechos de esta secuela toman lugar un año después de lo sucedido en El profesor Layton y el futuro perdido. La historia, aún sin muchos detalles, está ambientada en América, en la ficticia localización de Steam Bison, un lugar con una avanzada tecnología basada en las máquinas de vapor.' },
      ]
    },
    {
      id: 'Reciente-2',
      title: 'Anunciada segunda temporada para Kinnikuman: Perfect Origin Arc',
      description: 'dirige esta comedia para Studio Gallop con Michihiro Sato como asistente en la dirección. Sayuri Ooba (La asesina del romance) es la encargada de la supervisión de los guiones junto a Yūko Ebara como diseñador de personajes. Por otro lado, Manami Koyama es el director de arte de este anime con Ayami Minowa como diseñadora de color y Rena Tanimoto directora de fotografía. Kazuya Tanaka es el director de sonido.',
      image: '/image/news/Kinnikuman_perfectar.jpg',
      tipo: 'reciente',
      contentItems:[
        { type: 'paragraph', content: 'dirige esta comedia para Studio Gallop con Michihiro Sato como asistente en la dirección. Sayuri Ooba (La asesina del romance) es la encargada de la supervisión de los guiones junto a Yūko Ebara como diseñador de personajes. Por otro lado, Manami Koyama es el director de arte de este anime con Ayami Minowa como diseñadora de color y Rena Tanimoto directora de fotografía. Kazuya Tanaka es el director de sonido.' },
        { type: 'image', content: '/image/news/imagen-medio.webp' },
        { type: 'paragraph', content: 'Shuhei Miyazaki escribe esta comedia de gaps titulada Boku to Roboko, conocida internacionalmente como Me & Roboko. La obra se lleva serializando en las páginas de la revista Weekly Shônen Jump de Shueisha desde el 6 de julio de 2020, permaneciendo abierta con un total de 18 tomos recopilatorios en el mercado japonés. El manga fue nominado en la categoría de Mejor Manga Impreso en los Premios Next Manga 2021 y se ubicó en el puesto 13 de 50 nominados.' },
      ]
    },
    {
      id: 'popular-1',
      title: 'Anunciada segunda temporada para Kinnikuman: Perfect Origin Arc',
      description: 'Tras el final del anime de Kinnikuman: Perfect Origin Arc el pasado domingo, Production I.G. anunció que la serie contará con una segunda temporada. Esta se estrenará en la televisión japonesa en el mes de enero de 2025 y, al igual que la primera temporada, podrá verse a nivel mundial a través de la plataforma de vídeo bajo demanda Netflix. Asimismo, también se presentó una imagen promocional de esta nueva tanda de episodios en la que se puede ver a Kinnikuman al frente con varias escenas de la serie detrás.',
      image: '/image/news/Kinnikuman_perfectar.jpg',
      tipo: 'popular',
      contentItems:[
        { type: 'paragraph', content: ' dirige esta comedia para Studio Gallop con Michihiro Sato como asistente en la dirección. Sayuri Ooba (La asesina del romance) es la encargada de la supervisión de los guiones junto a Yūko Ebara como diseñador de personajes. Por otro lado, Manami Koyama es el director de arte de este anime con Ayami Minowa como diseñadora de color y Rena Tanimoto directora de fotografía. Kazuya Tanaka es el director de sonido.' },
        { type: 'image', content: '/image/news/imagen-medio.webp' },
        { type: 'paragraph', content: 'Shuhei Miyazaki escribe esta comedia de gaps titulada Boku to Roboko, conocida internacionalmente como Me & Roboko. La obra se lleva serializando en las páginas de la revista Weekly Shônen Jump de Shueisha desde el 6 de julio de 2020, permaneciendo abierta con un total de 18 tomos recopilatorios en el mercado japonés. El manga fue nominado en la categoría de Mejor Manga Impreso en los Premios Next Manga 2021 y se ubicó en el puesto 13 de 50 nominados.' },
      ]
    },
    {
      id: 'popular-2',
      title: 'Japón Perdido',
      description:'Japón es un país de contrastes. Entre lo antiguo y lo moderno. Entre la tradición y el cambio. Muchos autores a lo largo de los años han escrito sobre este lejano país y sus contrastes pero pocos como el orientalista y experto en Japón Alex Kerr con su Japón Perdido. A través de sus páginas el autor americano nos habla de su vida y experiencias en el país del sol naciente. Para ello el autor no dudó en ensalzar y en criticar de igual manera el cuidado de las tradiciones y cambios que sufre el país.',
      image: '/image/news/banner-japon.jpg',
      tipo: 'popular',
      contentItems:[
        { type: 'paragraph', content: 'A mediados de la década de los sesenta, Alex Kerr llegó por vez primera a Japón de la mano de su padre, un oficial de la armada norteamericana. En su retina quedó fijada la imagen de un país bello que, sobre todo en sus zonas rurales, transmitía una sensación de magia e irrealidad, como si un pedazo de historia se hubiera congelado en el apogeo de su hechizo. En sus visitas posteriores, la obsesión de Kerr por Japón fue aumentando y desde 1977 reside en el país, donde ha desarrollado un trabajo concienzudo de recuperación y conservación del viejo Japón, para contribuir a que la ola de la modernidad no erosione lo que queda de la tradición. Así, Kerr ha trabajado en programas para la restauración de casas rurales, ha fomentado el cultivo de artes como la caligrafía o el teatro kabuki y, en definitiva, se ha implicado en mantener vivo un Japón que se difumina.' },
        { type: 'image', content: '/image/news/imagen-medio.webp' },
        { type: 'paragraph', content: 'Japón Perdido es el libro perfecto para encender la chispa del interés por el Japón tradicional. A través de catorce capítulos, el autor nos narra su vida y experiencias en ese lejano país. Desde algo tan mundano como preparar un viaje, a arreglar unas máscaras de kabuki, Kerr consigue crear una obra a medio camino entre una guía y un diario que se ha convertido en un libro de referencia para entender al país.' },
      ]
    },
    {
      id: 'popular-3',
      title: 'Dragon Quest: The Hero Avan and the Dark Lord of Hellfire',
      description:'Tras año y medio de retraso ya se encuentra en librerías Dragon Quest: The Hero Avan and the Dark Lord of Hellfire, manga spinoff de Dragon Quest: The Adventure of Dai. Esta nueva historia tiene lugar 15 años antes de los hechos acaecidos en la obra original, y conoceremos, de primera mano, la aventura que vivió un joven Avan junto a sus compañeros, combatiendo a las fuerzas lideradas por el Señor Oscuro Hadler. Por tanto, es el momento de desgranar el primer tomo de este gran regalo para fans, sin spoilers.',
      image: '/image/news/dragon-quest_the-hero-avan-and-the-dark-lord-of-helfir.jpg',
      tipo: 'popular',
      contentItems:[
        { type: 'paragraph', content: 'Va a ser muy complicado ser objetivo al hablar de una obra que proviene del universo de la serie de tu infancia. Para los fans de Dai (o Fly, como lo conocimos aquí) la historia de Avan y sus compañeros siempre estuvo plagada de huecos, y si bien teníamos una idea muy general de lo que sucedió en esa primera lucha contra el Ejército Oscuro, gracias a un capítulo especial del manga, y otro especial del remake del anime, todavía quedaba mucha historia por contar. También había curiosidad por conocer mejor a algunos personajes que ya aparecieron brevemente en la obra original.' },
        { type: 'image', content: '/image/news/imagen-medio.webp' },
        { type: 'paragraph', content: 'En este primer tomo, al principio, se vuelven a relatar algunos hechos que pudimos ver en el remake del anime de Dai. Estos hechos nos presentan a Avan, a su fiel compañero Roka, al reino de Carl, a la reina regente de este, Flora y, por supuesto, también se relata el primer enfrentamiento de Avan con Hadler, comandante del Ejército Oscuro.' },
      ]
    }
  ];