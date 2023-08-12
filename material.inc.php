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

    "MUSHROOM" => array(
        "name" => clienttranslate('Mushroom')
    ),

    "FLOWER" => array(
        "name" => clienttranslate('Flower')
    ),

    "CHICKEN_FOOT" => array(
        "name" => clienttranslate('Chicken Foot')
    ),

    "FEATHER" => array(
        "name" => clienttranslate('Feather')
    ),

    "FROG" => array(
        "name" => clienttranslate('Frog')
    ),

    "SCORPION" => array(
        "name" => clienttranslate('Scorpion')
    ),

    "MANDRAKE" => array(
        "name" => clienttranslate('Mandrake')
    ),

    "STEM" => array(
        "name" => clienttranslate('Stem')
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




