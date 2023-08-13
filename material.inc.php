<?php
/**
 *------
 * BGA framework: © Gregory Isabelli <gisabelli@boardgamearena.com> & Emmanuel Colin <ecolin@boardgamearena.com>
 * AlchemistsCGE implementation : © <Your name here> <Your email address here>
 * 
 * This code has been produced on the BGA studio platform for use on http://boardgamearena.com.
 * See http://en.boardgamearena.com/#!doc/Studio for more information.
 * -----
 *
 * material.inc.php
 *
 * AlchemistsCGE game material description
 *
 * Here, you can describe the material of your game with PHP variables.
 *   
 * This file is loaded in your game logic class constructor, ie these variables
 * are available everywhere in your game logic code.
 *
 */

 $this->ingredient_types = array(

    "STEM" => array(
        "type_id" => "STEM",
        "name" => clienttranslate('Stem'),
        "id" => 0,
        "count" => 5
    ),

    "MANDRAKE" => array(
        "type_id" => "MANDRAKE",
        "name" => clienttranslate('Mandrake'),
        "id" => 1,
        "count" => 5
    ),

    "SCORPION" => array(
        "type_id" => "SCORPION",
        "name" => clienttranslate('Scorpion'),
        "id" => 2,
        "count" => 5
    ),

    "FLOWER" => array(
        "type_id" => "FLOWER",
        "name" => clienttranslate('Flower'),
        "id" => 3,
        "count" => 5
    ),

    "CHICKEN_FOOT" => array(
        "type_id" => "CHICKEN_FOOT",
        "name" => clienttranslate('Chicken Foot'),
        "id" => 4,
        "count" => 5
    ),

    "FEATHER" => array(
        "type_id" => "FEATHER",
        "name" => clienttranslate('Feather'),
        "id" => 5,
        "count" => 5
    ),

    "FROG" => array(
        "type_id" => "FROG",
        "name" => clienttranslate('Frog'),
        "id" => 6,
        "count" => 5
    ),

    "MUSHROOM" => array(
        "type_id" => "MUSHROOM",
        "name" => clienttranslate('Mushroom'),
        "id" => 7,
        "count" => 5
    )

 );

 $this->favor_types = array(

    "ASSISTANT" => array(
        "type_id" => "ASSISTANT",
        "name" => clienttranslate('Assistant'),
        "id" => 0,
        "count" => 4,
        "play_condition" => clienttranslate('Play when you declare actions.'),
        "description" => clienttranslate('For this round, you have 1 extra action cube.')
    ),

    "ASSOCIATE" => array(
        "type_id" => "ASSOCIATE",
        "name" => clienttranslate('Associate'),
        "id" => 1,
        "count" => 3,
        "play_condition" => clienttranslate('Play when you declare actions.'),
        "description" => clienttranslate('Choose one action space. On that space, your cubes go in the top row.')
    ),

    "BARMAID" => array(
        "type_id" => "BARMAID",
        "name" => clienttranslate('Barmaid'),
        "id" => 2,
        "count" => 2,
        "play_condition" => clienttranslate('Play when it is your turn to sell a potion.'),
        "description" => clienttranslate('If you mix an exact match, you gain 1 point of reputation. If not, count the potion as one level better than it is.')
    ),

    "CUSTODIAN" => array(
        "type_id" => "CUSTODIAN",
        "name" => clienttranslate('Custodian'),
        "id" => 3,
        "count" => 3,
        "play_condition" => clienttranslate('Play when you declare actions.'),
        "description" => clienttranslate('Place one cube on this card. For this round, that cube is a special Drink Potion action that you may use before the Sell Potions action space.')
    ),

    "HERBALIST" => array(
        "type_id" => "HERBALIST",
        "name" => clienttranslate('Herbalist'),
        "id" => 4,
        "count" => 4,
        "play_condition" => clienttranslate('Play immediately.'),
        "description" => clienttranslate('Draw 3 ingredients. Then discard 2 ingredients.')
    ),

    "MERCHANT" => array(
        "type_id" => "MERCHANT",
        "name" => clienttranslate('Merchant'),
        "id" => 5,
        "count" => 2,
        "play_condition" => clienttranslate('Play when it is your turn to sell a potion.'),
        "description" => clienttranslate('If you sell first, gain 1 gold piece. If not, you may sell any of the three potions, as though you were first.')
    ),

    "SAGE" => array(
        "type_id" => "SAGE",
        "name" => clienttranslate('Sage'),
        "id" => 6,
        "count" => 2,
        "play_condition" => clienttranslate('Play when you transmute an ingredient.'),
        "description" => clienttranslate('Gain 1 extra gold piece during transmutation.')
    ),

    "SHOPKEEPER" => array(
        "type_id" => "SHOPKEEPER",
        "name" => clienttranslate('Shopkeeper'),
        "id" => 7,
        "count" => 2,
        "play_condition" => clienttranslate('Play when you buy an artifact.'),
        "description" => clienttranslate('One artifact costs you 1 less gold piece.')
    )

 );

 $this->worker_placement_spaces = array(
    "PICK_INGREDIENTS_SPACE" => array(
        'name' => clienttranslate('Forage for Ingredient'),
        'tooltip' => clienttranslate('Take either 1 face-up ingredient from the row or draw 1 random ingredient from the top of the deck.')
    ),
    'TRANSMUTE_INGREDIENTS_SPACE' => array(
        'name' => clienttranslate('Transmute Ingredient'),
        'tooltip' => clienttranslate('Discard 1 ingredient and take 1 gold piece from the bank.')
    ),
    'SELL_POTION_SPACE' => array(
        'name' => clienttranslate('Sell Potion'),
        'tooltip' => clienttranslate('Choose one of the requested potions, choose a guarantee, then make a potion.')
    ),
    'BUY_ARTIFACT_SPACE' => array(
        'name' => clienttranslate('Buy Artifact'),
        'tooltip' => clienttranslate('Take one of the cards in the artifact row and pay the cost in the upper left corner.')
    ),
    'DEBUNK_THEORY_SPACE' => array(
         'name' => clienttranslate('Debunk Theory'),
         'tooltip' => clienttranslate('Choose one of the published theories and prove that it is incorrect.')
     ),
    'PUBLISH_THEORY_SPACE' => array(
         'name' => clienttranslate('Publish Theory'),
         'tooltip' => clienttranslate('Pick one of the alchemical tokens and place it on one of the books in the theory board.')
     ),
    'TEST_ON_STUDENT_SPACE' => array(
         'name' => clienttranslate('Test on Student'),
         'tooltip' => clienttranslate('Choose two ingredients to combine and make a student drink the resulting potion.')
     ),
    'TEST_ON_SELF_SPACE' => array(
         'name' => clienttranslate('Drink Potion'),
         'tooltip' => clienttranslate('Choose two ingredients to combine and drink the resulting potion yourself.')
     )

 );



