define(['dojo', 'dojo/_base/declare', 'ebg/stock'], (dojo, declare, Stock) => {
    return class ALC_Deck {
        hand = null;
        deck = null;
        discard = null;

        cardTypes = null;
        cardImagePath = '';
        cardWidth = 0;
        cardHeight = 0;
        gameThis = null;

        constructor(cardTypes, cardImagePath, cardWidth, cardHeight, gameThis) {
            if (cardTypes.length < 1)
                console.error('No card types were added to deck on construction!');
            this.cardTypes = cardTypes;

            this.cardWidth = cardWidth;
            this.cardHeight = cardHeight;
            this.cardImagePath = cardImagePath;
            this.gameThis = gameThis;
        }

        setPlayerHand(playerHandElementId) {
            this.hand = new Stock();
            this.hand.create(this.gameThis, $(playerHandElementId), this.cardWidth, this.cardHeight);
            this.hand.image_items_per_row = 8;

            for (let key in this.cardTypes) {
                let type = this.cardTypes[key];
                this.hand.addItemType(type.id, 1, this.cardImagePath, type.id);
            }

            dojo.connect(this.hand, 'onChangeSelection', this, 'onPlayerHandSelectionChanged');
        }

        updatePlayerHand(playerHandData) {
            console.log('updatePlayerHand', playerHandData);
            //TODO: Does this actually work?
            for (let key in playerHandData) {
                const card = playerHandData[key];
                console.log(card.type_arg, card.id);
                this.hand.addToStockWithId(card.type_arg, card.id);
            }
        }

        onPlayerHandSelectionChanged() {
            this.hand.getUnselectedItems().forEach((item) => {
                let cardDivId = this.hand.getItemDivId(item.id);
                $(cardDivId).classList.remove('pending-discard');
            });
            this.hand.getSelectedItems().forEach((item) => {
                let cardDivId = this.hand.getItemDivId(item.id);
                $(cardDivId).classList.add('pending-discard');
            });
        }
    }
});