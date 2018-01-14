import scala.sys.process.Process

name := """simple-twitter-app"""
organization := "com.linkebon"

version := "1.0.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.12.4"

libraryDependencies += guice
libraryDependencies += ws

lazy val buildFrontends = taskKey[Unit]("Build frontends")

buildFrontends := {
  simpleTwitterApp.value
}

lazy val simpleTwitterApp = taskKey[Unit]("generate simpletwitterapp")
simpleTwitterApp := {
  val frontendPath = baseDirectory.value.getPath + "/frontend/react-redux-simple-twitter-app"
  Process(s"npm run generateFrontend --prefix $frontendPath").!
}