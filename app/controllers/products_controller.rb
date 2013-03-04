class ProductsController < ApplicationController
  def index
    products = Product.all
    render json: products
  end

  def show
    products = Product.find(params[:id])
    render json: products
  end
end
