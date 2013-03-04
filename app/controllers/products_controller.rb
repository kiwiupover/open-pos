class ProductsController < ApplicationController
  def index
    products = Products.all
    render json: products
  end

  def show
    products = Products.find(params[:id])
    render json: products
  end
end
