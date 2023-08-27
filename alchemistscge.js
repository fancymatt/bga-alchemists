/**
 *------
 * BGA framework: © Gregory Isabelli <gisabelli@boardgamearena.com> & Emmanuel Colin <ecolin@boardgamearena.com>
 * AlchemistsCGE implementation : © <Your name here> <Your email address here>
 *
 * This code has been produced on the BGA studio platform for use on http://boardgamearena.com.
 * See http://en.boardgamearena.com/#!doc/Studio for more information.
 * -----
 *
 * alchemistscge.js
 *
 * AlchemistsCGE user interface script
 * 
 * In this file, you are describing the logic of your user interface, in Javascript language.
 *
 */



define([
    "dojo","dojo/_base/declare",
    "ebg/core/gamegui",
    "ebg/counter",
    "ebg/stock"
],
function (dojo, declare) {
    return declare("bgagame.alchemistscge", ebg.core.gamegui, {
        constructor: function(){
            console.log('alchemistscge constructor');

            this.cardwidth = 72;
            this.cardheight = 96;
              
            // Here, you can init the global variables of your user interface
            // Example:
            // this.myGlobalValue = 0;

        },
        
        /*
            setup:
            
            This method must set up the game user interface according to current game situation specified
            in parameters.
            
            The method is called each time the game interface is displayed to a player, ie:
            _ when the game starts
            _ when a player refreshes the game page (F5)
            
            "gamedatas" argument contains all datas retrieved by your "getAllDatas" PHP method.
        */
        
        setup: function( gamedatas )
        {
            console.log( "Starting game setup" );

            // Set mobile viewport for portrait orientation based on gameinfos.inc.php
            this.default_viewport = "width=" + this.interface_min_width;
            this.onScreenWidthChange();
            
            // Setting up player boards
            for( var player_id in gamedatas.players )
            {
                var player = gamedatas.players[player_id];
                         
                // TODO: Setting up players boards if needed
            }
            
            // TODO: Set up your game interface here, according to "gamedatas"

            // Player hand: Ingredients
            this.playerIngredientsHand = new ebg.stock();
            this.playerIngredientsHand.create(this, $('ingredient-cards-hand'), this.cardwidth, this.cardheight);
            this.playerIngredientsHand.image_items_per_row = 8;

            for (let key in this.gamedatas.ingredientTypes) {
                let ingredientType = this.gamedatas.ingredientTypes[key];
                this.playerIngredientsHand.addItemType(ingredientType.id, 1, g_gamethemeurl + 'img/ingredients.jpg', ingredientType.id);
            }

            for (let key in this.gamedatas.ingredientHand) {
                var card = this.gamedatas.ingredientHand[key];
                var type = card.type;
                var id = this.gamedatas.ingredientTypes[type].id;
                this.playerIngredientsHand.addToStockWithId(id, card.id);
            }

            // Player hand: Favors
            this.playerFavorHand = new ebg.stock();
            this.playerFavorHand.create(this, $('favor-cards-hand'), this.cardwidth, this.cardheight);
            this.playerFavorHand.image_items_per_row = 8;

            for (let key in this.gamedatas.favorTypes) {
                let favorType = this.gamedatas.favorTypes[key];
                this.playerFavorHand.addItemType(favorType.id, 1, g_gamethemeurl + 'img/favors.jpg', favorType.id);
            }

            for (let key in this.gamedatas.favorHand) {
                var card = this.gamedatas.favorHand[key];
                var type = card.type;
                var id = this.gamedatas.favorTypes[type].id;
                this.playerFavorHand.addToStockWithId(id, card.id);
            }

            dojo.connect(this.playerFavorHand, 'onChangeSelection', this, 'onPlayerFavorCardHandSelectionChanged');

            // Setup game notifications to handle (see "setupNotifications" method below)
            this.setupNotifications();

            console.log( "Ending game setup" );
        },
       

        ///////////////////////////////////////////////////
        //// Game & client states
        
        // onEnteringState: this method is called each time we are entering into a new game state.
        //                  You can use this method to perform some user interface changes at this moment.
        //
        onEnteringState: function( stateName, args )
        {
            console.log( 'Entering state: '+stateName );
        },

        // onLeavingState: this method is called each time we are leaving a game state.
        //                 You can use this method to perform some user interface changes at this moment.
        //
        onLeavingState: function( stateName )
        {
            console.log( 'Leaving state: '+stateName );

            /* Example
            
            case 'myGameState':
            
                // Hide the HTML block we are displaying only during this game state
                dojo.style( 'my_html_block_id', 'display', 'none' );
                
                break;
           */

        }, 

        // onUpdateActionButtons: in this method you can manage "action buttons" that are displayed in the
        //                        action status bar (ie: the HTML links in the status bar).
        //        
        onUpdateActionButtons: function( stateName, args )
        {
            console.log( 'onUpdateActionButtons: '+stateName );
                      
            if( this.isCurrentPlayerActive() )
            {            
                switch( stateName )
                {
                    case 'gameSetup_chooseFavorCards':
                        this.addActionButton('button_1_id', _('Confirm Selection'), 'discardFavorCard');
                        break;
/*               
                 Example:
 
                 case 'myGameState':
                    
                    // Add 3 action buttons in the action status bar:
                    
                    this.addActionButton( 'button_1_id', _('Button 1 label'), 'onMyMethodToCall1' ); 
                    this.addActionButton( 'button_2_id', _('Button 2 label'), 'onMyMethodToCall2' ); 
                    this.addActionButton( 'button_3_id', _('Button 3 label'), 'onMyMethodToCall3' ); 
                    break;
*/
                }
            }
        },        

        ///////////////////////////////////////////////////
        //// Utility methods

        discardFavorCard: function(discardedCardId) {
            console.log("Discarding favor card", discardedCardId);
            this.playerFavorHand.removeFromStockById(discardedCardId);
            let action = "stDiscardFavorCard";
            this.ajaxcall("/" + this.game_name + "/" + this.game_name + "/" + action + ".html", {
                card_id: discardedCardId,
                lock: true
            }, this, function(result) {
            }, function(is_error) {
            });

            this.playerFavorHand.unselectAll();
        },

        updateFavorCardHand: function() {

        },
        
        /*
        
            Here, you can defines some utility methods that you can use everywhere in your javascript
            script.
        
        */

        ///////////////////////////////////////////////////
        //// Player's action
        
        /*
        
            Here, you are defining methods to handle player's action (ex: results of mouse click on 
            game objects).
            
            Most of the time, these methods:
            _ check the action is possible at this game state.
            _ make a call to the game server
        
        */

        onPlayerFavorCardHandSelectionChanged: function() {
            let selectedItems = this.playerFavorHand.getSelectedItems();
            if (selectedItems.length != 1)
                return;

            let selectedCard = selectedItems[0];
            this.discardFavorCard(selectedCard.id);

        },

        /* Example:
        
        onMyMethodToCall1: function( evt )
        {
            console.log( 'onMyMethodToCall1' );
            
            // Preventing default browser reaction
            dojo.stopEvent( evt );

            // Check that this action is possible (see "possibleactions" in states.inc.php)
            if( ! this.checkAction( 'myAction' ) )
            {   return; }

            this.ajaxcall( "/alchemistscge/alchemistscge/myAction.html", { 
                                                                    lock: true, 
                                                                    myArgument1: arg1, 
                                                                    myArgument2: arg2,
                                                                    ...
                                                                 }, 
                         this, function( result ) {
                            
                            // What to do after the server call if it succeeded
                            // (most of the time: nothing)
                            
                         }, function( is_error) {

                            // What to do after the server call in anyway (success or failure)
                            // (most of the time: nothing)

                         } );        
        },        
        
        */

        
        ///////////////////////////////////////////////////
        //// Reaction to cometD notifications

        /*
            setupNotifications:
            
            In this method, you associate each of your game notifications with your local method to handle it.
            
            Note: game notification names correspond to "notifyAllPlayers" and "notifyPlayer" calls in
                  your alchemistscge.game.php file.
        
        */
        setupNotifications: function()
        {
            console.log( 'notifications subscriptions setup' );
            
            // TODO: here, associate your game notifications with local methods
            
            // Example 1: standard notification handling
            // dojo.subscribe( 'cardPlayed', this, "notif_cardPlayed" );
            
            // Example 2: standard notification handling + tell the user interface to wait
            //            during 3 seconds after calling the method in order to let the players
            //            see what is happening in the game.
            // dojo.subscribe( 'cardPlayed', this, "notif_cardPlayed" );
            // this.notifqueue.setSynchronous( 'cardPlayed', 3000 );
            // 
        },  
        
        // TODO: from this point and below, you can write your game notifications handling methods
        
        /*
        Example:
        
        notif_cardPlayed: function( notif )
        {
            console.log( 'notif_cardPlayed' );
            console.log( notif );
            
            // Note: notif.args contains the arguments specified during you "notifyAllPlayers" / "notifyPlayer" PHP call
            
            // TODO: play the card in the user interface.
        },    
        
        */

        onScreenWidthChange: function () {
            // Remove broken "zoom" property added by BGA framework
            this.gameinterface_zoomFactor = 1;
            $("page-content").style.removeProperty("zoom");
            $("page-title").style.removeProperty("zoom");
            $("right-side-first-part").style.removeProperty("zoom");
        }


   });             
});
