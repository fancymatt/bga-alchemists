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


/*

Example:

$this->card_types = array(
    1 => array( "card_name" => ...,
                ...
              )
);

*/




