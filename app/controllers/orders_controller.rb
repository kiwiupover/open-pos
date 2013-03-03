class OrdersController < ApplicationController

  def index
    orders = Order.all
    render json: orders
  end

	def show
    order = Order.find(params[:id])
    render json: order
  end

  def create
    order = Orders.new(params[:order])
    if order.save
      render json: order, status: :created
    else
      render json: order.errors, status: :unprocessable_entity
    end
  end

  def update
    order = Orders.find(params[:id])
    if order.update_attributes(params[:order])
      render json: order, status: :ok
    else
      render json: order.errors, status: :unprocessable_entity
    end
  end

  def destroy
    order = Orders.find(params[:id])
    order.destroy
    render json: nil, status: :ok
  end
end
