<?php
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
        $this->cards->pickCards(1, 'deck', $player_id);
    }

    public function get_player_hand($player_id) {
        return $this->cards->getCardsInLocation('hand', $player_id);
    }
}