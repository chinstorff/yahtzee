<div class="content">
  <div class="header">
    <h1>Yahtzee</h1>
    <p>Total score: <%= total %>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="http://chinstorff.com" style="color:#F02311;">chinstorff.com</a></p>
  </div>
  <div class="board">
    <div class="dice">
      <p>
	<a id="#adie"><%= adie %></a><br>
	<a id="#bdie"><%= bdie %></a><br>
	<a id="#cdie"><%= cdie %></a><br>
	<a id="#ddie"><%= ddie %></a><br>
	<a id="#edie"><%= edie %></a><br>
      </p>
      &nbsp;<button type="button" class="btn btn-default btn-small" id="roll" style="margin-top:0px">roll</button>
    </div>
    <div class="score-column">
      <table class="table table-condensed table-hover" style="margin-bottom:0px">
	<tr id="aces"><td>Aces</td><td><%= aces =></td></tr>
	<tr id="twos"><td>Twos</td><td><%= twos =></td></tr>
	<tr id="threes"><td>Threes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td><%= threes =></td></tr>
	<tr id="fours"><td>Fours</td><td><%= fours =></td></tr>
	<tr id="fives"><td>Fives</td><td><%= fives =></td></tr>
	<tr id="sixes"><td>Sixes</td><td><%= sixes =></td></tr>
      </table>

      <table class="table table-condensed">
	<tr><td></td><td></td></tr>
	<tr><td>Upper sum</td><td><%= upperSum %></td></tr>
	<tr><td>Bonus</td><td><%= bonus %></td></tr>
	<tr><td>Subtotal</td><td><%= upperSubtotal %></td></tr>
	<tr><td></td><td></td></tr>
      </table>
    </div>
    <div class="score-column">
      <table class="table table-condensed table-hover" style="margin-bottom:0px">
	<tr><td>3 of a kind&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td><%= threeOfAKind =></td></tr>
	<tr><td>4 of a kind</td><td><%= fourOfAKind =></td></tr>
	<tr><td>Full house</td><td><%= fullHouse =></td></tr>
	<tr><td>Small straight</td><td><%= smallStraight =></td></tr>
	<tr><td>Large straight</td><td><%= largeStraight =></td></tr>
	<tr><td>Yahtzee</td><td><%= yahtzee =></td></tr>
	<tr><td>Chance</td><td><%= chance =></td></tr>
      </table>
      <table class="table table-condensed">
	<tr><td>Yahtzee bonus</td><td><%= yahtzeeBonus %></td></tr>
	<tr><td></td><td></td></tr>
	<tr><td>Subtotal</td><td><%= lowerSubtotal %></td></tr>
	<tr><td></td><td></td></tr>
      </table>
    </div>
  </div>
</div>
