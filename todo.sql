/*
Navicat Premium Mongodb Data Transfer

Source Server         : localhost
Source Server Version : 50547
Source Host           : 127.0.0.1:3306
Source Database       : todo-list

Target Server Type    : MYSQL
Target Server Version : 50547

Date: 2019-03-31 9:50:33
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for task_list
-- ----------------------------
DROP TABLE IF EXISTS `todo_table`;
CREATE TABLE `todo_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) NOT NULL COMMENT 'todo content',
  `complete` int(11) NOT NULL COMMENT 'staus of complete',
  PRIMARY KEY (`id`),
) DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of task_list
-- ----------------------------
INSERT INTO `task_list` VALUES ('1', 'teak1', 'true', 0x756E646566696E6564);
INSERT INTO `task_list` VALUES ('2', 'teak1', 'true', 0x756E646566696E6564);
INSERT INTO `task_list` VALUES ('3', 'teak1', 'false', 0x756E646566696E6564);
INSERT INTO `task_list` VALUES ('4', 'teak1', 'false', 0x756E646566696E6564);

