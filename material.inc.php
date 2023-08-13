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
        "id" => 0
    ),

    "MANDRAKE" => array(
        "type_id" => "MANDRAKE",
        "name" => clienttranslate('Mandrake'),
        "id" => 1
    ),

    "SCORPION" => array(
        "type_id" => "SCORPION",
        "name" => clienttranslate('Scorpion'),
        "id" => 2
    ),

    "FLOWER" => array(
        "type_id" => "FLOWER",
        "name" => clienttranslate('Flower'),
        "id" => 3
    ),

    "CHICKEN_FOOT" => array(
        "type_id" => "CHICKEN_FOOT",
        "name" => clienttranslate('Chicken Foot'),
        "id" => 4
    ),

    "FEATHER" => array(
        "type_id" => "FEATHER",
        "name" => clienttranslate('Feather'),
        "id" => 5
    ),

    "FROG" => array(
        "type_id" => "FROG",
        "name" => clienttranslate('Frog'),
        "id" => 6
    ),

    "MUSHROOM" => array(
        "type_id" => "MUSHROOM",
        "name" => clienttranslate('Mushroom'),
        "id" => 7
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



