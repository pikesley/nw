require 'sinatra'

module Nw
  class App < Sinatra::Base
    get '/' do
      '<h1>Nightwatch<h1>'
    end
  end
end
