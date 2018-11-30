var appname = angular.module('cubicles', []);
appname.controller('cubicleRepeat', ['$scope',
  function($scope) {
    $scope.people = [
		{ name: 'Aarohi Rastogi', monitors: '2', size: '22', standingDesk: 'no', imagelocation:'photos1\\Aarohi Rastogi.jpg', type:"laptop", notes:"", pcname:""},
		{ name: 'Abby Sabin', monitors: '2', size: '19', standingDesk: 'no', imagelocation:'photos1\\abbysabin.jpg', type:"laptop",notes:"",pcname:"" },
		{ name: 'Angel Diaz', monitors: '2', size: '22', standingDesk: 'no', imagelocation:'photos1\\angeldiaz.jpg',type:"desktop",notes:"",pcname:""},
		{ name: 'Angie Guzman', monitors: '2', size: '22', standingDesk: 'no', imagelocation:'photos1\\angieguzman.jpg',type:"laptop",notes:"printer",pcname:""},
		{ name: 'Anni Eloyn', monitors: '2', size: '22', standingDesk: 'no', imagelocation:'photos1\\annieloyn.jpg',type:"laptop",notes:"",pcname:""},
		{ name: 'Ashley Tanalyn', monitors: '', size: '', standingDesk: '', imagelocation:'',type:"",notes:"",pcname:""},
		
		{ name: 'Candia Perkins', monitors: '2', size: '22', standingDesk: 'no', imagelocation:'photos1\\candiaperkins.jpg',type:"laptop",notes:"",pcname:""},
		{ name: 'Carlos Loera', monitors: '2', size: '20', standingDesk: 'no', imagelocation:'photos1\\aarohirastogi.jpg',type:"laptop",notes:"",pcname:""},
		{ name: 'Catherine Modaro', monitors: '2', size: '22,19', standingDesk: 'no', imagelocation:'photos1\\abbysabin.jpg',type:"laptop",notes:"",pcname:""},
		{ name: 'Cecelia Alfaro', monitors: '', size: '', standingDesk: '', imagelocation:'photos1\\angeldiaz.jpg',type:"",notes:"",pcname:""},
		{ name: 'Chi-pu Chao', monitors: '2', size: '22,19', standingDesk: 'no', imagelocation:'photos1\\angieguzman.jpg',type:"laptop",notes:"",pcname:""},
		{ name: 'Cyrus Tooksy', monitors: '2', size: '22', standingDesk: 'no', imagelocation:'photos1\\annieloyn.jpg',type:"desktop",notes:"",pcname:""},
		
		{ name: 'David Shih', monitors: '', size: '', standingDesk: '', imagelocation:'na',type:"",notes:"",pcname:""},
		{ name: 'Dru Davenport', monitors: '2', size: '22', standingDesk: 'no', imagelocation:'photos1\\candiaperkins.jpg',type:"desktop",notes:"",pcname:""},
		
		{ name: 'Edde Lee', monitors: '2', size: '22', standingDesk: 'yes', imagelocation:'photos1\\candiaperkins.jpg',type:"laptop",notes:"",pcname:""},
		{ name: 'Eileen Kwan', monitors: '2', size: '22', standingDesk: 'yes', imagelocation:'photos1\\aarohirastogi.jpg',type:"laptop",notes:"",pcname:""},
		
		{ name: 'Lu Collins', monitors: '2', size: '19', standingDesk: 'no', imagelocation:'photos1\\abbysabin.jpg',type:"laptop",notes:"",pcname:""},
		{ name: 'George Franklin', monitors: '2', size: '19', standingDesk: 'no', imagelocation:'photos1\\abbysabin.jpg',type:"laptop",notes:"",pcname:"PASLQUA02"},
		
		{ name: 'Jennifer Khwajazada', monitors: '', size: '', standingDesk: '', imagelocation:'photos1\\angeldiaz.jpg',type:"",notes:"",pcname:""},
		{ name: 'Jennifer Cowie King', monitors: '2', size: '22,19', standingDesk: 'yes', imagelocation:'photos1\\angieguzman.jpg',type:"laptop",notes:"",pcname:""},
		{ name: 'Jennifer Land-Bolander', monitors: '2', size: '22', standingDesk: 'yes', imagelocation:'photos1\\annieloyn.jpg',type:"laptop",notes:"",pcname:""},
		{ name: 'Judi Carruthers', monitors: '1', size: '19', standingDesk: 'no', imagelocation:'na',type:"desktop",notes:"",pcname:""},
		
		{ name: 'Karen Caudle', monitors: '2', size: '22', standingDesk: 'no', imagelocation:'photos1\\candiaperkins.jpg',type:"desktop",notes:"",pcname:"9CPWWK2"},
		{ name: 'Kathleen Friendman', monitors: '2', size: '22', standingDesk: 'no', imagelocation:'photos1\\candiaperkins.jpg',type:"laptop",notes:"",pcname:""},
		{ name: 'Katie Bender', monitors: '2', size: '21', standingDesk: 'no', imagelocation:'photos1\\aarohirastogi.jpg',type:"laptop",notes:"",pcname:""},
		{ name: 'Keith Spencer', monitors: '2', size: '19', standingDesk: 'no', imagelocation:'photos1\\abbysabin.jpg',type:"laptop",notes:"",pcname:""},
		{ name: 'Kimberly Cohen', monitors: '2', size: '21', standingDesk: '', imagelocation:'photos1\\angeldiaz.jpg',type:"laptop",notes:"",pcname:""},
		
		{ name: 'Lailani Payumo', monitors: '2', size: '19', standingDesk: 'no', imagelocation:'photos1\\angieguzman.jpg',type:"laptop",notes:"printer - PASPFIN02",pcname:"7MR9Z52"},
		{ name: 'Laurie Laney', monitors: '2', size: '19', standingDesk: 'no', imagelocation:'photos1\\annieloyn.jpg',type:"desktop",notes:"",pcname:"PASDADM05"},
		{ name: 'Luz Hernandez', monitors: '', size: '', standingDesk: '', imagelocation:'na',type:"",notes:"",pcname:""},
		{ name: 'Lydia Esparza', monitors: '2', size: '21,20', standingDesk: 'no', imagelocation:'photos1\\candiaperkins.jpg',type:"desktop",notes:"",pcname:"PASDLGL12"},
		
		{ name: 'Mari Harris', monitors: '2', size: '24', standingDesk: 'no', imagelocation:'photos1\\candiaperkins.jpg',type:"laptop",notes:"",pcname:"PASPOFC01"},
		{ name: 'Mary Jean Anderson', monitors: '', size: '', standingDesk: '', imagelocation:'photos1\\aarohirastogi.jpg',type:"",notes:"",pcname:""},
		{ name: 'Matilde Fuente', monitors: '1', size: '19', standingDesk: 'no', imagelocation:'photos1\\abbysabin.jpg',type:"desktop",notes:"",pcname:""},
		{ name: 'Megan Martinez', monitors: '2', size: '22', standingDesk: 'no', imagelocation:'photos1\\angeldiaz.jpg',type:"",notes:"",pcname:""},
		{ name: 'Michael Pierce', monitors: '2', size: '20', standingDesk: 'no', imagelocation:'photos1\\angieguzman.jpg',type:"laptop",notes:"",pcname:"NHCLITS41"},
		{ name: 'Mindy Tran', monitors: '2', size: '20,19', standingDesk: '', imagelocation:'photos1\\annieloyn.jpg',type:"laptop",notes:"",pcname:""},
		
		{ name: 'Pam Migas', monitors: '1', size: '21', standingDesk: 'no', imagelocation:'na',type:"laptop",notes:"printer - PASPLGL02",pcname:"85KCYF2"},
		{ name: 'Phim Pi', monitors: '', size: '', standingDesk: '', imagelocation:'photos1\\candiaperkins.jpg',type:"",notes:"",pcname:""},
		
		{ name: 'Rachel Caldwell', monitors: '', size: '', standingDesk: '', imagelocation:'photos1\\angeldiaz.jpg',type:"",notes:"",pcname:""},
		{ name: 'Rachel Johnson', monitors: '2', size: '22,19', standingDesk: 'no', imagelocation:'photos1\\angieguzman.jpg',type:"laptop",notes:"",pcname:""},
		{ name: 'Rami Jindali', monitors: '2', size: '22', standingDesk: 'yes', imagelocation:'photos1\\annieloyn.jpg',type:"laptop",notes:"",pcname:""},
		{ name: 'Reggie Akens', monitors: '2', size: '22', standingDesk: 'yes', imagelocation:'na',type:"",notes:"",pcname:""},
		{ name: 'Robert Flores', monitors: '2', size: '21', standingDesk: 'no', imagelocation:'photos1\\candiaperkins.jpg',type:"laptop",notes:"",pcname:"6XM8YZ1"},
		
		{ name: 'Samantha Ross', monitors: '2', size: '22', standingDesk: 'yes', imagelocation:'photos1\\candiaperkins.jpg',type:"laptop",notes:"",pcname:""},
		{ name: 'Sande Budwig', monitors: '2', size: '22', standingDesk: 'yes', imagelocation:'photos1\\aarohirastogi.jpg',type:"laptop",notes:"",pcname:""},
		
		{ name: 'Teresa Diaz', monitors: '2', size: '19', standingDesk: 'no', imagelocation:'photos1\\abbysabin.jpg',type:"laptop",notes:"",pcname:"PASLQUA02"},
		
		{ name: 'Valerie Humbles', monitors: '', size: '', standingDesk: '', imagelocation:'photos1\\angeldiaz.jpg',type:"",notes:"",pcname:""},
		{ name: 'Vikki Jenkis', monitors: '2', size: '22,19', standingDesk: 'yes', imagelocation:'photos1\\angieguzman.jpg',type:"laptop",notes:"",pcname:""},
		
		{ name: 'Warren Rivera', monitors: '2', size: '22', standingDesk: 'yes', imagelocation:'photos1\\annieloyn.jpg',type:"laptop",notes:"",pcname:""},
		{ name: 'Wileen Hernandez', monitors: '1', size: '19', standingDesk: 'no', imagelocation:'na',type:"desktop",notes:"",pcname:""},
		
		{ name: 'Yolanda Perez', monitors: '2', size: '22', standingDesk: 'no', imagelocation:'photos1\\candiaperkins.jpg',type:"desktop",notes:"",pcname:"9CPWWK2"}
		
		
	];
}]);