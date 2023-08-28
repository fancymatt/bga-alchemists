define(['dojo', 'dojo/_base/declare', 'ebg/stock'], (dojo, declare, stock) => {
    return class ALC_FavorCardDeck {
        // TODO: Rename to just FavorCard so we can encompass hand, deck, and discard?

        hand;
        cardWidth = 72;
        cardHeight = 96;

        constructor() {
            this.hand = new stock();
        }

        setup(playerHandElementId, cardTypes, cardImagePath, gameThis) {
            this.hand.create(gameThis, $(playerHandElementId), this.cardWidth, this.cardHeight);
            this.hand.image_items_per_row = 8;

            for (let key in cardTypes) {
                let type = cardTypes[key];
                this.hand.addItemType(type.id, 1, cardImagePath, type.id);
            }

            dojo.connect(this.hand, 'onChangeSelection', this, 'onPlayerFavorCardHandSelectionChanged');
        }

        updatePlayerHand(playerHandData) {
            for (let key in playerHandData) {
                const card = playerHandData[key];
                const typeId = card.type_arg;
                this.hand.addToStockWithId(typeId, card.id);
            }
        }

        onPlayerFavorCardHandSelectionChanged() {
            console.log("onPlayerFavorCardHandSelectionChanged");
            /*
            let selectedItems = this.playerFavorHand.getSelectedItems();
                if (selectedItems.length != 1)
                    return;

                let selectedCard = selectedItems[0];
                this.discardFavorCard(selectedCard.id);
             */
        }
    }
});