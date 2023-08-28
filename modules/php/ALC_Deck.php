<?php

/*
 * My own wrapper for the BGA Deck class
 *
 * Reminder of key values for cards inside Decks:
 * id: unique id
 * type, type_arg: what kind of card
 * location, location_arg: where is the card ('hand', 'deck', 'discard')
 */

class ALC_Deck {

    protected $deck_title = 'cards';

    public $cards;

    function __construct($common_module_deck) {
        // we must pass in Table::getNew('module.common.deck') to this method
        $this->cards = new $common_module_deck;
        $this->cards->init($this->deck_title);
    }

    public function populate_deck($card_types_material) {
        // the definitions of the cards are in material.inc.php
        $card_types = array();
        foreach($card_types_material as $key => $value) {
            $card_types[] = array(
                'type' => $value['type_id'],
                'type_arg' => $value['id'],
                'nbr' => $value['count']
            );
        }

        $this->cards->createCards($card_types, 'deck');
        $this->shuffle();
    }

    public function shuffle() {
        $this->cards->shuffle('deck');
    }

    public function player_draw_card($player_id) {
        // TODO: Check for null
        $this->cards->pickCard('deck', $player_id);
    }

    public function player_draw_cards($player_id, $num_cards) {
        $this->cards->pickCards($num_cards, 'deck', $player_id);
    }

    public function get_player_hand($player_id) {
        return $this->cards->getCardsInLocation('hand', $player_id);
    }

    public function get_deck() {
        return $this->cards->getCardsInLocation('deck');
    }

    public function get_discard_pile() {
        return $this->cards->getCardsInLocation('discard');
    }

    public function discard_card($card_id) {
        $this->cards->moveCard($card_id, 'discard');
    }

    public function get_deck_count() {
        return $this->cards->countCardInLocation('deck');
    }

    public function get_discard_count() {
        return $this->cards->countCardInLocation('discard');
    }
}