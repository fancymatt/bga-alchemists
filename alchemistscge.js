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
    'dojo',
    'dojo/_base/declare',
    'ebg/core/gamegui',
    'ebg/counter',
    g_gamethemeurl + 'modules/js/ALC_Deck.js',
], function (dojo, declare, gamegui, counter, ALC_Deck) {
    return declare('bgagame.alchemistscge', ebg.core.gamegui, {
        constructor: function(){
            console.log('alchemistscge.js::constructor');
        },
        setup: function(gamedatas)
        {
            console.log('alchemistscge.js::setup');

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

            // Setup ingredients
            this.ingredientsDeck = new ALC_Deck(gamedatas.ingredientTypes, g_gamethemeurl + 'img/ingredients.jpg', 72, 96, this);
            this.ingredientsDeck.setPlayerHand('ingredient-cards-hand');
            this.ingredientsDeck.setDeck('ingredient-card-deck');
            this.ingredientsDeck.updateDeck(this.gamedatas.ingredientDeck);

            // Setup favors
            this.favorsDeck = new ALC_Deck(gamedatas.favorTypes, g_gamethemeurl + 'img/favors.jpg', 72, 96, this);
            this.favorsDeck.setPlayerHand('favor-cards-hand');
            this.favorsDeck.setDeck('favor-card-deck');
            this.favorsDeck.updateDeck(this.gamedatas.favorDeck);

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

            switch( stateName ) {
                case 'gameSetup_chooseFavorCards':
                    this.favorsDeck.dealCardsToHand(this.gamedatas.favorHand);

                    this.favorsDeck.setHandlerForSingleSelection(() => {
                        dojo.removeClass('button_confirm_discard', 'disabled');
                        console.log("single selection");
                    });

                    this.favorsDeck.setHandlerForNonSingleSelection(() => {
                        dojo.addClass('button_confirm_discard', 'disabled');
                        console.log("non single selection");
                    });

                    return;
            }
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
                      
            if(!this.isCurrentPlayerActive()) return;

            switch(stateName)
            {
                case 'gameSetup_chooseFavorCards':
                    this.addActionButton('button_confirm_discard', _('Confirm Discard'), 'confirmDiscard');
                    dojo.addClass('button_confirm_discard', 'disabled');
                    break;
            }
        },        

        ///////////////////////////////////////////////////
        //// Utility methods

        confirmDiscard: function() {
            let card = this.favorsDeck.getSelectedCard();
            console.log("Discarding favor card", card);
            this.favorsDeck.removeCardFromHand(card.id);
            let action = "discardFavorCard";
            this.ajaxcall("/" + this.game_name + "/" + this.game_name + "/" + action + ".html", {
                card_id: card.id,
                lock: true
            }, this, function(result) {
            }, function(is_error) {
            });
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
