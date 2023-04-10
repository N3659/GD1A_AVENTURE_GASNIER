class Grotte_Int extends Phaser.Scene {


    constructor() {
        super("Grotte_Int");
    }
    preload(){

        console.log("siu")

        //on charge le tileset et la première zone
        this.load.image("tileset", "Level_Design/Tiled/Tileset/tileset_final.png");
        this.load.tilemapTiledJSON("SceneGrotteInt", "Level_Design/Tiled/Grotte_Int.json");

        console.log("siu")

        this.load.spritesheet('marche_perso','Sprites/Perso/Sprite_marche_perso-Sheet.png',
        { frameWidth: 32, frameHeight: 32 });

        this.load.spritesheet('item_perso','Sprites/Perso/sprite_item_perso-Sheet.png',
        { frameWidth: 32, frameHeight: 32 });

        this.load.spritesheet('idle_perso','Sprites/Perso/Sprite_perso.png',
        { frameWidth: 32, frameHeight: 32 });

        this.load.spritesheet('atk_perso','Sprites/Perso/Sprite_perso_attak_sheett.png',
        { frameWidth: 32, frameHeight: 32 });

        this.load.spritesheet('shield_block','Sprites/Perso/Sprite_shield_block_perso-Sheet.png',
        { frameWidth: 32, frameHeight: 32 });

        this.load.spritesheet('boss_carreau_idle','Sprites/Ennemis/Sprite_boss_Carreau.png',
        { frameWidth: 32, frameHeight: 32 });

        this.load.spritesheet('boss_carreau_atk','Sprites/Ennemis/Sprite_boss_Carreau_atk-Sheet.png',
        { frameWidth: 32, frameHeight: 32 });

        this.load.spritesheet('boss_carreau_marche','Sprites/Ennemis/Sprite_boss_Carreau_marche-Sheet.png',
        { frameWidth: 32, frameHeight: 32 });

        this.load.spritesheet('boss_coeur_idle','Sprites/Ennemis/Sprite_boss_Coeur.png',
        { frameWidth: 32, frameHeight: 32 });

        this.load.spritesheet('boss_coeur_atk','Sprites/Ennemis/Sprite_boss_Coeur_atk-Sheet.png',
        { frameWidth: 32, frameHeight: 32 });

        this.load.spritesheet('boss_coeur_marche','Sprites/Ennemis/Sprite_boss_Coeur_marche-Sheet.png',
        { frameWidth: 32, frameHeight: 32 });

        this.load.spritesheet('boss_pic_idle','Sprites/Ennemis/Sprite_boss_pic.png',
        { frameWidth: 32, frameHeight: 32 });

        this.load.spritesheet('boss_pic_atk','Sprites/Ennemis/Sprite_boss_pic_atk-Sheet.png',
        { frameWidth: 32, frameHeight: 32 });

        this.load.spritesheet('boss_pic_marche','Sprites/Ennemis/Sprite_boss_pic_marche-Sheet.png',
        { frameWidth: 32, frameHeight: 32 });

        this.load.spritesheet('boss_trefle_idle','Sprites/Ennemis/Sprite_boss_Trèfle.png',
        { frameWidth: 32, frameHeight: 32 });

        this.load.spritesheet('boss_trefle_atk','Sprites/Ennemis/Sprite_boss_Trèfle_atk-Sheet.png',
        { frameWidth: 32, frameHeight: 32 });

        this.load.spritesheet('boss_trefle_marche','Sprites/Ennemis/Sprite_boss_Trèfle_marche-Sheet.png',
        { frameWidth: 32, frameHeight: 32 });

        //chargement des sprites de boss

        this.load.spritesheet('ennemi_carreau_idle','Sprites/Ennemis/Sprite_ennemi_bCarreau.png',
        { frameWidth: 32, frameHeight: 32 });

        this.load.spritesheet('ennemi_carreau_atk','Sprites/Ennemis/Sprite_ennemi_bCarreau_atk-Sheet.png',
        { frameWidth: 32, frameHeight: 32 });

        this.load.spritesheet('ennemi_coeur_idle','Sprites/Ennemis/Sprite_ennemi_bCoeur.png',
        { frameWidth: 32, frameHeight: 32 });

        this.load.spritesheet('ennemi_coeur_atk','Sprites/Ennemis/Sprite_ennemi_bCoeur_atk-Sheet.png',
        { frameWidth: 32, frameHeight: 32 });

        this.load.spritesheet('ennemi_pic_idle','Sprites/Ennemis/Sprite_ennemi_bPic.png',
        { frameWidth: 32, frameHeight: 32 });

        this.load.spritesheet('ennemi_pic_atk','Sprites/Ennemis/Sprite_ennemi_bPic_atk-Sheet.png',
        { frameWidth: 32, frameHeight: 32 });

        this.load.spritesheet('ennemi_trefle_idle','Sprites/Ennemis/Sprite_ennemi_bTrefle.png',
        { frameWidth: 32, frameHeight: 32 });

        this.load.spritesheet('ennemi_trefle_atk','Sprites/Ennemis/Sprite_ennemi_bTrefle_atk-Sheet.png',
        { frameWidth: 32, frameHeight: 32 });
        
        //chargement des sprites des ennemis

        this.load.image('UI', 'Sprites/UI-Sheet.png',
        { frameWidth: 32, frameHeight: 32 });

        //FIN DE CHARGEMENT DES SPRITES

        // chargement tileset


    }

    create (){

        console.log("siu")
        
        const level = this.add.tilemap("SceneGrotteInt");
        console.log("siu")
        const tileset = this.level.addTilesetImage("tileset","tileset_final");
        console.log("siu")
        const calque_Jardin = this.level.createLayer("Zone_Grotte_Int", tileset);
        console.log("siu")
        const calque_Sol = this.level.createLayer("couche2", tileset)

        this.player.setCollideWorldBounds(true);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(this.player, calque_Village);
        this.physics.add.collider(this.player, couche2, null, this);
        this.physics.world.setBounds(0, 0, 1600, 1600);
        this.cameras.main.setBounds(0, 0, 1600, 1600);
        this.cameras.main.startFollow(this.player);

        //On crée les limites et la caméra 
        
        console.log("siu")
        //on crée et initialise les inputs de clavier
        this.cursors = this.input.keyboard.createCursorKeys();
        this.clavier = this.input.keyboard.addKeys('Q,S,Z,D');

        this.player = this.physics.add.sprite(0,0, "marche_perso");

        this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('marche_perso', {start:0,end:3}),
        frameRate: 20,
        repeat: -1
        });

        this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('marche_perso', {start:0,end:3}),
        frameRate: 20,
        repeat: -1
        });

        this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers('marche_perso', {start:0,end:3}),
        frameRate: 20,
        repeat: -1
        });

        this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('marche_perso', {start:0,end:3}),
        frameRate: 20,
        repeat: -1
        });
        //on load les animations et on les assigne a un certain input


        //on charge la map
    }

    update (){

        console.log("siu")

    if (cursors.left.isDown || clavier.Q.isDown){ //si la touche gauche est appuyée
        this.player.setVelocityX(200); //alors vitesse négative en X
        player.anims.play('marche_perso', true);
    }

    else if (cursors.right.isDown || clavier.D.isDown){ //sinon si la touche droite est appuyée
        player.setVelocityX(200); //alors vitesse positive en X
        player.anims.play('marche_perso', true);
    }

    else if (cursors.down.isDown || clavier.S.isDown){
    //si touche bas appuyée
        player.setVelocityY(200); 
        player.anims.play('marche_perso', true);
    }

    else if (cursor.up.idDown || clavier.Z.isDown){
        player.setVelocityY(-200);
        player.anims.play('marche_perso', true);
    }

    else{
        player.setVelocityX(0)//sinon le joueur s'arrête
        player.anims.stop();//l'animation s'arrête
    }
    //on check si les inputs de mouvement sont entrés
    }

    switchGrotteExt() 
    {
        this.scene.start("Grotte_Ext");
    }

}