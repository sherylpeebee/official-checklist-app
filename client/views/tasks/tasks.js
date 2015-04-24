'use strict';

angular.module('checklist')
.controller('TasksCtrl', ['$scope', 'Task', '$window', function($scope, Task, $window){
  $scope.afTasks = Task.init();

  console.info('i am a task controller');

  $scope.toggleComplete = function(task){
    Task.save(task);
  };

  $scope.deleteTask = function(task){
    Task.destroy(task);
    console.log('i am deleter');
  };

  $scope.addTask = function(task){
      console.log(task.dueDate);
    var o = {
      title: task.title,
      dueDate: task.dueDate.getTime(),
      priority: task.priority,
      isComplete: false,
      createdAt: $window.Firebase.ServerValue.TIMESTAMP
    };

  $scope.editTask = function(task){
    task.dueDate = new Date(task.dueDate);
    $scope.task = task;

  };

  $scope.updateTask = function(task){

    $scope.task = {};
    task.dueDate = task.dueDate.getTime();
    Task.save(task);
  };

    Task.add(o)
    .then(function(){
      $scope.task = {};
    });
  };
}]);
