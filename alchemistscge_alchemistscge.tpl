{OVERALL_GAME_HEADER}

<div id="table-layer">
    <div id="player-tables">
        <!-- BEGIN player -->
        <div class="playertable whiteblock playertable_{DIR}">
            <div class="playertablename" style="color:#{PLAYER_COLOR}">
                {PLAYER_NAME}
            </div>
            <div class="playertablecard" id="playertablecard_{PLAYER_ID}"></div>
        </div>
        <!-- END player -->
    </div>

    <div id="worker-board">
        <h2>Worker Placement Board</h2>
    </div>
    <div id="theory-board">
        <h2>Theory Board</h2>
    </div>
    <div id="player-area">
        <h2>Player Area</h2>
        <div id="deduction-area">
            <h3>Deduction Area</h3>
        </div>
        <div id="card-area">
            <div id="ingredient-cards" class="whiteblock">
                <h3>{INGREDIENT_CARDS}</h3>
                <div id="ingredient-cards-hand">
                </div>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">

// Javascript HTML templates

var jstpl_cardontable = '<div class="cardontable" id="cardontable_${player_id}" style="background-position:-${x}px -${y}px">\
                        </div>';

</script>  

{OVERALL_GAME_FOOTER}
