var app = angular.module('articleapp', ['ui.router']);

//设置单页应用路由
app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "/articles/views/state1.html"
    })
    .state('state1.list', {
      url: "/list",
      templateUrl: "/articles/views/state1.list.html",
      controller: function($scope) {
        $scope.items = ["A1", "List", "Of", "Items"];
      }
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "/articles/views/state2.html"
    })
    .state('state2.list', {
      url: "/list",
      templateUrl: "/articles/views/state2.list.html",
      controller: function($scope) {
        $scope.things = ["A2", "Set", "Of", "Things"];
      }
    }).state('state3',{
      url:'/state3',
      templateUrl:'/articles/views/state3.html'
    });
});
//articles/views/article-list.html

app.controller("ArticleCtrl", function($scope, $http) {
  $scope.test = "this is article";
  /////新增一条数据
  $scope.postArticle = function() {
    var article = {
      "content": $scope.content,
      "title": $scope.topic
    };
    alert(JSON.stringify(article));
    $http({
      url: '/articles',
      method: 'post',
      data: JSON.stringify(article),
      headers: {
        'Content-type': 'application/json'
      }
    }).success(function(data, status, headers, config) {
      if (status == 200) {
        alert("新增成功");
      }
    })
  };
  /////
  $scope.deleteArticle = function() {
      if ($scope.del_id != '') {
        $http.delete('/articles/' + $scope.del_id).
        success(function(data, status, headers, config) {
          if (status = 200) {
            alert("删除成功");
          }
        }).error(function() {
          alert("删除失败");
        })
      }
    }
    //根据id，获取文章
  $scope.getArticle = function() {
    if ($scope.get_id != '') {
      $http.get('/articles/' + $scope.get_id).
      success(function(data, status, headers, config) {
        console.log(data);
      }).error(function() {
        console.log("获取数据失败");
      })
    };

  }

  //更新电影上映时间
  $scope.updateArticle = function() {
    if ($scope.update_id != '') {
      $http.put('/article/' + $scope.update_id).
      success(function(data, status, headers, config) {
        if (status == 200) {
          console.log(data);
        }
      }).error(function(data, status, headers, config) {
        alert('系统异常!');
      });
    }
  };

  $scope.alertDialog = function() {
    alert("jianlai l ");
  }
})