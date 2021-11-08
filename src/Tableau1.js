/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload() {
        //bg 2 (tout au fond et très flou)
        this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
        this.load.image('bg2-tree-2', 'assets/level/background-2/bg2-tree-2.png');
        this.load.image('bg2-terrain-4', 'assets/level/background-2/bg2-terrain-4.png');

        //bg 1 (gris légèrement flou)
        this.load.image('bg1-terrain-3', 'assets/level/background-1/bg-terrain-3.png');
        this.load.image('bg1-terrain-1', 'assets/level/background-1/bg-terrain-1.png');
        this.load.image('bg1-terrain-4', 'assets/level/background-1/bg-terrain-4.png');
        this.load.image('bg1-tree-3', 'assets/level/background-1/bg-tree-3.png');
        this.load.image('bg1-tree-1', 'assets/level/background-1/bg-tree-1.png');
        this.load.image('bg1-tree-2', 'assets/level/background-1/bg-tree-2.png');
        this.load.image('bg1-wb', 'assets/level/background-1/bg-wooden-bridge.png');

        //ground (premier plan noir)
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gTree2', 'assets/level/ground/g-tree-2.png');
        this.load.image('gchampi1', 'assets/level/ground/g-mushroom1.png');
        this.load.image('gstone1', 'assets/level/ground/g-stone-1.png');
        this.load.image('gbridge1', 'assets/level/ground/g-wooden-bridge.png');
        this.load.image('gwater', 'assets/level/ground/g-water.png');
        this.load.image('gbox2', 'assets/level/ground/g-box-2.png');
        this.load.image('gleft', 'assets/level/ground/g-left.png');
        this.load.image('gstone4', 'assets/level/ground/g-stone-4.png');
        this.load.image('gTree1', 'assets/level/ground/g-tree-1.png');
        this.load.image('gstone5', 'assets/level/ground/g-stone-5.png');
        this.load.image('gfellentree1', 'assets/level/ground/g-fellen-tree-1.png');
        this.load.image('gspike1', 'assets/level/ground/g-spike-1.png');
        this.load.image('vina', 'assets/level/ground/g-vine-a.png');

        this.load.image('z6','assets/zombies/z6.png');
        this.load.image('z9','assets/zombies/z9.png');
        this.load.image('z11','assets/zombies/z11.png');

        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for (let i = 1; i <= 5; i++) {
            this.load.image('g-grass-' + i, 'assets/level/ground/g-grass-' + i + '.png');
        }

        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent FAIT
        for (let i = 1; i <= 3; i++) {
            this.load.image('filterFilm' + i, 'assets/level/filters/bloody/frame' + i + '.png');
        }

        for (let i = 1; i <= 3; i++) {
            this.load.image('filterRain' + i, 'assets/level/weather/rain/frame' + i + '.png');
        }

        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple FAIT
        for (let i = 1; i <= 3; i++) {
            this.load.image('bg-animation-' + i, 'assets/level/background-2/bg-animation/bg-animation-' + i + '.png');
        }
    }
    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    create(){

        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */
        let bgAnimation1=this.add.sprite(0,0, 'bg-animation-1').setOrigin(0,0);

        //--------------background 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container=this.add.container(0,0);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain2=this.add.image(-170,90, 'bg2-terrain-2').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain2);
        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree2=this.add.image(400,-50, 'bg2-tree-2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree2);
        bg2Tree2.angle=-5; //pencher l'arbre de -5 degrès

        let bg2Terrain4=this.add.image(500,140, 'bg2-terrain-4').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain4);

        let bg2Tree3=this.add.image(930,-50, 'bg2-tree-2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree3);
        bg2Tree3.scaleX=-1

        let bg2Tree4=this.add.image(1050,-50, 'bg2-tree-2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree4);

        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container=this.add.container(0,0);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain3=this.add.image(-465,180, 'bg1-terrain-3').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain3);

        let bg1Terrain1=this.add.image(600,270, 'bg1-terrain-1').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain1);
        bg1Terrain1.scaleX=0.4
        bg1Terrain1.scaleY=0.6

        let bg1Terrain4=this.add.image(950,240, 'bg1-terrain-4').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain4);
        bg1Terrain4.scale=0.8

        let bgtree1=this.add.image(150,-120, 'bg1-tree-3').setOrigin(0,0);
        this.bg1Container.add(bgtree1);
        bgtree1.scale= 0.6

        let bgtree2=this.add.image(-25,-45, 'bg1-tree-1').setOrigin(0,0);
        this.bg1Container.add(bgtree2);
        bgtree2.scale= 0.6

        let bgtree3=this.add.image(650,-10, 'bg1-tree-3').setOrigin(0,0);
        this.bg1Container.add(bgtree3);
        bgtree3.scale=0.6

        let bgtree4=this.add.image(1300,-10, 'bg1-tree-2').setOrigin(0,0);
        this.bg1Container.add(bgtree4);
        bgtree4.scaleX=0.6
        bgtree4.scaleY=1

        let bgtree5=this.add.image(1180,-10, 'bg1-tree-2').setOrigin(0,0);
        this.bg1Container.add(bgtree5);
        bgtree5.scale=0.6
        bgtree5.scaleY=1

        let wb=this.add.image(770,240, 'bg1-wb').setOrigin(0,0);
        this.bg1Container.add(wb);
        wb.scale= 1

        //-------------ground (premier plan noir)---------------------------

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer=this.add.container(0,0);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let tree1=this.add.image(240,390, 'gTree2').setOrigin(0,1);
        /**tree1.setTintFill(0xFF0000); // pratique pour dbugger*/
        this.groundContainer.add(tree1);
        tree1.angle=0
        tree1.scaleX=0.7
        tree1.scaleY=0.7

        let tree2=this.add.image(150,440, 'gTree2').setOrigin(0,1);
        /**tree2.setTintFill(0xFF0000); // pratique pour dbugger*/
        this.groundContainer.add(tree2);
        tree2.angle=-1
        tree2.scaleX=-0.9
        tree2.scaleY=1

        let champ=this.add.image(220,365, 'gchampi1').setOrigin(0,1);
        this.groundContainer.add(champ);
        champ.angle=0
        champ.scaleX=-1
        champ.scaleY=1

        let stone1=this.add.image(423,360, 'gstone1').setOrigin(0,1);
        this.groundContainer.add(stone1);
        stone1.angle=0
        stone1.scaleX=-1.3
        stone1.scaleY=1.7

        let box=this.add.image(494,349, 'gbox2').setOrigin(0,1);
        this.groundContainer.add(box);
        box.angle=4
        box.scale=0.7

        let bridge=this.add.image(390,390, 'gbridge1').setOrigin(0,1);
        this.groundContainer.add(bridge);
        bridge.angle=0
        bridge.scale=0.9

        let water=this.add.image(390,630, 'gwater').setOrigin(0,1);
        this.groundContainer.add(water);
        water.angle=0
        water.scaleX=1.5

        let landleft=this.add.image(800,772, 'gleft').setOrigin(0,1);
        this.groundContainer.add(landleft);
        landleft.angle=0
        landleft.scaleX=1
        landleft.scaleY=1

        let stone4=this.add.image(815,400, 'gstone4').setOrigin(0,1);
        this.groundContainer.add(stone4);
        stone4.angle=0
        stone4.scale=1

        let mid2=this.add.image(1000,772, 'gMid').setOrigin(0,1);
        this.groundContainer.add(mid2);
        mid2.angle=0
        mid2.scaleX=2.7

        let tree3=this.add.image(1010,390, 'gTree1').setOrigin(0,1);
        /**tree1.setTintFill(0xFF0000); // pratique pour dbugger*/
        this.groundContainer.add(tree3);
        tree3.angle=-7
        tree3.scaleX=-1
        tree3.scaleY=0.9

        let stone5=this.add.image(1080,400, 'gstone5').setOrigin(0,1);
        this.groundContainer.add(stone5);
        stone5.angle=0
        stone5.scale=1.3

        let tree4=this.add.image(1105,390, 'gTree2').setOrigin(0,1);
        this.groundContainer.add(tree4);
        tree4.angle=0
        tree4.scaleX=0.7
        tree4.scaleY=0.7

        let landright=this.add.image(1380,772, 'gRight').setOrigin(0,1);
        this.groundContainer.add(landright);
        landright.angle=0
        landright.scaleX=1
        landright.scaleY=1

        let champ2=this.add.image(1400,402, 'gchampi1').setOrigin(0,1);
        this.groundContainer.add(champ2);
        champ2.angle=0
        champ2.scale=0.6

        let landleft2=this.add.image(1920,800, 'gleft').setOrigin(0,1);
        this.groundContainer.add(landleft2);
        landleft2.angle=0
        landleft2.scaleX=1
        landleft2.scaleY=1

        let fellentree1=this.add.image(1520,394, 'gfellentree1').setOrigin(0,1);
        this.groundContainer.add(fellentree1);
        fellentree1.angle=5
        fellentree1.scaleX=1
        fellentree1.scaleY=1

        let herbe1=this.add.image(1060,400, 'g-grass-2').setOrigin(0,1);
        this.groundContainer.add(herbe1);
        herbe1.angle=0
        herbe1.scaleX=1
        herbe1.scaleY=1

        let herbe2=this.add.image(1090,394, 'g-grass-4').setOrigin(0,1);
        this.groundContainer.add(herbe2);
        herbe2.angle=0
        herbe2.scaleX=1
        herbe2.scaleY=1

        let herbe3=this.add.image(1350,410, 'g-grass-2').setOrigin(0,1);
        this.groundContainer.add(herbe3);
        herbe3.angle=0
        herbe3.scaleX=1
        herbe3.scaleY=1

        let herbe4=this.add.image(1460,410, 'g-grass-4').setOrigin(0,1);
        this.groundContainer.add(herbe4);
        herbe4.angle=0
        herbe4.scaleX=1
        herbe4.scaleY=1

        let herbe5=this.add.image(1990,430, 'g-grass-1').setOrigin(0,1);
        this.groundContainer.add(herbe5);
        herbe5.angle=0
        herbe5.scaleX=0.8
        herbe5.scaleY=0.8

        let herbe6=this.add.image(805,410, 'g-grass-2').setOrigin(0,1);
        this.groundContainer.add(herbe6);
        herbe6.angle=0
        herbe6.scaleX=0.8
        herbe6.scaleY=0.8

        let herbe7=this.add.image(890,410, 'g-grass-5').setOrigin(0,1);
        this.groundContainer.add(herbe7);
        herbe7.angle=0
        herbe7.scaleX=1.5
        herbe7.scaleY=1

        let herbe8=this.add.image(410,620, 'g-grass-4').setOrigin(0,1);
        this.groundContainer.add(herbe8);
        herbe8.angle=0
        herbe8.scale=3

        let herbe10=this.add.image(600,620, 'g-grass-4').setOrigin(0,1);
        this.groundContainer.add(herbe10);
        herbe10.angle=0
        herbe10.scale=3

        let spike1=this.add.image(1500,550, 'gspike1').setOrigin(0,1);
        this.groundContainer.add(spike1);
        spike1.angle=0
        spike1.scaleX=1
        spike1.scaleY=1.6

        let spike2=this.add.image(1725,550, 'gspike1').setOrigin(0,1);
        this.groundContainer.add(spike2);
        spike2.angle=0
        spike2.scaleX=1
        spike2.scaleY=1

        let z6=this.add.image(1160,370, 'z6').setOrigin(0,1);
        this.groundContainer.add(z6);
        z6.angle=10
        z6.scale=0.7

        let z9=this.add.image(650,360, 'z9').setOrigin(0,1);
        this.groundContainer.add(z9);
        z9.scale=1

        let z11=this.add.image(1980,425, 'z11').setOrigin(0,1);
        this.groundContainer.add(z11);
        z11.scale=1

        let vine1=this.add.image(580,25, 'vina').setOrigin(0,1);
        this.groundContainer.add(vine1);
        vine1.scale=0.6

        let vine2=this.add.image(582,50, 'vina').setOrigin(0,1);
        this.groundContainer.add(vine2);
        vine2.angle=-5
        vine2.scale=0.6

        let vine3=this.add.image(582,75, 'vina').setOrigin(0,1);
        this.groundContainer.add(vine3);
        vine3.angle=0
        vine3.scale=0.6

        let vine4=this.add.image(530,25, 'vina').setOrigin(0,1);
        this.groundContainer.add(vine4);
        vine4.angle=0
        vine4.scale=0.6

        let vine5=this.add.image(530,50, 'vina').setOrigin(0,1);
        this.groundContainer.add(vine5);
        vine5.angle=0
        vine5.scale=0.6

        let vine6=this.add.image(530,75, 'vina').setOrigin(0,1);
        this.groundContainer.add(vine6);
        vine6.angle=0
        vine6.scale=0.6

        let vine7=this.add.image(530,100, 'vina').setOrigin(0,1);
        this.groundContainer.add(vine7);
        vine7.angle=0
        vine7.scale=0.6

        let vine8=this.add.image(528,125, 'vina').setOrigin(0,1);
        this.groundContainer.add(vine8);
        vine8.angle=5
        vine8.scale=0.6

        let vine9=this.add.image(531,150, 'vina').setOrigin(0,1);
        this.groundContainer.add(vine9);
        vine9.angle=-5
        vine9.scale=0.6

        let vine10=this.add.image(528,175, 'vina').setOrigin(0,1);
        this.groundContainer.add(vine10);
        vine10.angle=5
        vine10.scale=0.6

        let vine11=this.add.image(1950,25, 'vina').setOrigin(0,1);
        this.groundContainer.add(vine11);
        vine11.angle=0
        vine11.scale=0.6

        let vine12=this.add.image(1950,50, 'vina').setOrigin(0,1);
        this.groundContainer.add(vine12);
        vine12.angle=0
        vine12.scale=0.6

        let vine13=this.add.image(1950,75, 'vina').setOrigin(0,1);
        this.groundContainer.add(vine13);
        vine13.angle=0
        vine13.scale=0.6

        let vine14=this.add.image(1950,100, 'vina').setOrigin(0,1);
        this.groundContainer.add(vine14);
        vine14.angle=0
        vine14.scale=0.6

        let vine15=this.add.image(1948,125, 'vina').setOrigin(0,1);
        this.groundContainer.add(vine15);
        vine15.angle=5
        vine15.scale=0.6

        let vine16=this.add.image(1949.25,150, 'vina').setOrigin(0,1);
        this.groundContainer.add(vine16);
        vine16.angle=0
        vine16.scale=0.6

        let vine17=this.add.image(1947.25,175, 'vina').setOrigin(0,1);
        this.groundContainer.add(vine17);
        vine17.angle=5
        vine17.scale=0.6

        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
        //ici on va calculer les positions
        let gMid1=this.add.image(-180,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1);
        /**
         * Terrain 2
         * @type {Phaser.GameObjects.Image}
         */
        let gMid2=this.add.image(gMid1.x+gMid1.width,350, 'gMid').setOrigin(0,0); //on rajoute 1 px pour l'exemple
        this.groundContainer.add(gMid2);
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gMid3=this.add.image(gMid2.x+gMid2.width,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid3);
        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-1').setOrigin(0,1)
        this.groundContainer.add(grass);
        /**
         * encore de l'herbe
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass2=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-3').setOrigin(0,1)
        this.groundContainer.add(grass2);
        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterFilm = this.add.sprite(0, 0, 'filterFilm1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'film',
            frames: [
                {key:'filterFilm1'},
                {key:'filterFilm2'},
                {key:'filterFilm3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterFilm.play('film');

        this.filterRain = this.add.sprite(0, 0, 'filterRain1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'rain',
            frames: [
                {key:'filterRain1'},
                {key:'filterRain2'},
                {key:'filterRain3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterRain.play('rain');

        this.filterRain = this.add.sprite(900, 0, 'filterRain1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'rain',
            frames: [
                {key:'filterRain1'},
                {key:'filterRain2'},
                {key:'filterRain3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterRain.play('rain');

        this.filterRain = this.add.sprite(1800, 0, 'filterRain1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'rain',
            frames: [
                {key:'filterRain1'},
                {key:'filterRain2'},
                {key:'filterRain3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterRain.play('rain');

        //TODO élève faire une animation du même genre que filter mais pour bgAnimation1

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 2025, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        bgAnimation1.scrollFactorX=0;
        this.filterFilm.scrollFactorX=0;
        this.bg2Container.scrollFactorX=0.2;
        this.bg1Container.scrollFactorX=0.4;
        this.groundContainer.scrollFactorX=1;
    }

    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=4;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=-4;
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=0;
                    break;
            }
        });
    }

    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update(){
        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterFilm.setAlpha(Phaser.Math.Between(95,100)/100)
    }


}
