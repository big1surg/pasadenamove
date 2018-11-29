var appname = angular.module('office', []);
appname.controller('officeRepeat', ['$scope',
  function($scope) {
    $scope.people = [
		{ name: 'Adi Adijat', monitors: '', size: '', standingDesk: 'no',type:"", notes:"", pcname:""},
		{ name: 'Arnold Pamplano', monitors: '2', size: '19', standingDesk: 'no', type:"laptop",notes:"",pcname:"" },
		
		{ name: 'Brandon Shelton', monitors: '2', size: '22', standingDesk: 'no', type:"laptop",notes:"",pcname:""},
		{ name: 'Brie Olivia Foote', monitors: '2', size: '19', standingDesk: 'no', type:"laptop",notes:"arm mount",pcname:""},
		{ name: 'Bruce Swartz', monitors: '1', size: '19', standingDesk: 'no', type:"desktop",notes:"DX 80, arm mount",pcname:""},
		
		{ name: 'Cathy Kay', monitors: '2', size: '24', standingDesk: 'no', type:"laptop",notes:"arm mount, printer",pcname:""},
		{ name: 'Christina Zicklin', monitors: '2', size: '22', standingDesk: 'yes',type:"laptop",notes:"dual arm stand",pcname:"paslmar03"},
		
		{ name: 'Dan Lacovara', monitors: '2', size: '22', standingDesk: 'yes', type:"laptop",notes:"",pcname:"paslmar08"},
		{ name: 'Dan Loeterman', monitors: '2', size: '22', standingDesk: 'no',type:"",notes:"",pcname:""},
		{ name: 'David Chacon', monitors: '2', size: '22', standingDesk: 'yes', type:"laptop",notes:"",pcname:""},
		{ name: 'David Vukadinovich', monitors: '2', size: '22/19', standingDesk: 'no',type:"laptop",notes:"",pcname:""},
		{ name: 'Deneen Hadley', monitors: '1', size: '22', standingDesk: 'no', type:"laptop",notes:"",pcname:""},
		{ name: 'Dennis Hemphill', monitors: '1', size: '24', standingDesk: 'no',type:"laptop",notes:"",pcname:""},
		{ name: 'Dexter Erise', monitors: '2', size: '22', standingDesk: 'no',type:"laptop",notes:"replace current monitors with new 24s",pcname:""},
		{ name: 'Diana Tantingco', monitors: '2', size: '19', standingDesk: 'no', type:"laptop",notes:"printer",pcname:""},
		{ name: 'Diwen Chen', monitors: '2', size: '22', standingDesk: 'no',type:"laptop",notes:"",pcname:"CG5YKX1"},
		
		{ name: 'Evan Porto', monitors: '2', size: '22', standingDesk: 'no', type:"laptop",notes:"",pcname:""},
		
		{ name: 'Gail Daly', monitors: '2', size: '19/22', standingDesk: 'no',type:"laptop",notes:"",pcname:""},
		{ name: 'Gayland Hethcoat', monitors: '2', size: '19', standingDesk: 'no',type:"laptop",notes:"",pcname:"pasllgl08"},
		{ name: 'Gayle Whitcomb', monitors: '2', size: '19', standingDesk: 'no', type:"laptop",notes:"",pcname:"paslits015"},
		
		{ name: 'Herb Inscho', monitors: '1', size: '19', standingDesk: 'no',type:"laptop",notes:"",pcname:""},
		{ name: 'Herman Dulay', monitors: '2', size: '19/22', standingDesk: 'no',type:"laptop",notes:"",pcname:""},
		
		{ name: 'Jane Weldon', monitors: '2', size: '19', standingDesk: 'no', type:"laptop",notes:"printer",pcname:""},
		{ name: 'Janet Holdych', monitors: '2', size: '22', standingDesk: 'no',type:"laptop",notes:"",pcname:""},
		{ name: 'Jeeyoung Kim', monitors: '2', size: '24', standingDesk: 'no', type:"laptop",notes:"paspllgl12",pcname:""},
		{ name: 'Jennifer Fagnani', monitors: '2', size: '22', standingDesk: 'no',type:"laptop",notes:"printer - pasplgl12",pcname:""},
		{ name: 'Jennifer Schaab', monitors: '2', size: '22', standingDesk: 'no',type:"laptop",notes:"",pcname:"pasladm44"},
		{ name: 'Joe Kim', monitors: '2', size: '22', standingDesk: 'no', type:"laptop",notes:"",pcname:""},
		{ name: 'Julie Simer', monitors: '2', size: '24', standingDesk: 'no',type:"laptop",notes:"printer - pasplgl01",pcname:"paslgl33"},
		{ name: 'Julie Sprengel', monitors: '1', size: '19', standingDesk: 'no',type:"desktop",notes:"dx80, arm mount",pcname:""},
		
		{ name: 'Karine Hovsepyan', monitors: '2', size: '22', standingDesk: 'no', type:"laptop",notes:"",pcname:""},
		{ name: 'Katie Wargnier', monitors: '2', size: '19', standingDesk: 'no',type:"laptop",notes:"",pcname:""},
		{ name: 'Kriselle Walton', monitors: '2', size: '22', standingDesk: 'no',type:"laptop",notes:"",pcname:""},
		{ name: 'Kristin Rosemond', monitors: '2', size: '22/19', standingDesk: 'no', type:"laptop",notes:"printer",pcname:""},
		
		{ name: 'Laura Prati', monitors: '', size: '', standingDesk: 'no',type:"",notes:"",pcname:""},
		{ name: 'Linda Mcdonald', monitors: '2', size: '19', standingDesk: 'no',type:"laptop",notes:"",pcname:""},
		
		{ name: 'Margaret Hambleton', monitors: '1', size: '19', standingDesk: 'no', type:"laptop",notes:"",pcname:""},
		{ name: 'Maria Zeny Jones', monitors: '2', size: '22', standingDesk: 'no',type:"laptop",notes:"",pcname:""},
		{ name: 'Mark Behl', monitors: '', size: '', standingDesk: '', type:"",notes:"",pcname:""},
		{ name: 'Mark Muniz', monitors: '2', size: '22', standingDesk: 'yes',type:"laptop",notes:"",pcname:"d1vlvz1"},
		{ name: 'Matthew Soskins', monitors: '2', size: '22/20', standingDesk: 'no',type:"laptop",notes:"printer - pasplgl14",pcname:"8xc7g12"},
		{ name: 'Megan Micaletti', monitors: '2', size: '22', standingDesk: 'no', type:"laptop",notes:"",pcname:""},
		{ name: 'Michael Jones', monitors: '2', size: '22', standingDesk: 'no',type:"laptop",notes:"",pcname:""},
		{ name: 'Mike Castillo', monitors: '1', size: '22', standingDesk: 'no',type:"laptop",notes:"printer",pcname:""},
		{ name: 'Muoi Ho', monitors: '2', size: '22', standingDesk: 'yes', type:"laptop",notes:"",pcname:"hr41ph2"},
		
		{ name: 'Natasha Jivani', monitors: '2', size: '19/22', standingDesk: 'no',type:"laptop",notes:"",pcname:"4yh0g72"},
		{ name: 'Nicholas Testa', monitors: '1', size: '22', standingDesk: 'no',type:"laptop",notes:"",pcname:""},
		
		{ name: 'Pedro Ayala', monitors: '2', size: '20', standingDesk: 'no', type:"laptop",notes:"",pcname:""},
		{ name: 'Phil Bradley', monitors: '2', size: '22', standingDesk: 'no',type:"",notes:"camera on left monitor",pcname:""},
		{ name: 'Phil Pristelski', monitors: '', size: '', standingDesk: 'no',type:"laptop",notes:"",pcname:""},
		
		{ name: 'Rachelle Wenger', monitors: '1', size: '22', standingDesk: 'no',type:"",notes:"printer",pcname:""},
		{ name: 'Robert Bonner', monitors: '2', size: '22', standingDesk: 'no',type:"desktop",notes:"",pcname:"3ryp9n2"},
		
		{ name: 'Sonia Solin', monitors: '2', size: '22', standingDesk: 'no', type:"laptop",notes:"dual arm stand",pcname:""},
		{ name: 'Sue Pietrafesco', monitors: '', size: '', standingDesk: '',type:"",notes:"",pcname:""},
		{ name: 'Suzan Vida Konell', monitors: '2', size: '24', standingDesk: 'no',type:"laptop",notes:"",pcname:""},
		
		{ name: 'Tom Desanto', monitors: '2', size: '22', standingDesk: 'no',type:"laptop",notes:"",pcname:""}
		
		
	];
}]);
  
  /*
  Copyright 2018 Google Inc. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at http://angular.io/license
  */
