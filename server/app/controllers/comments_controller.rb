class CommentsController < ApplicationController

  def index
  @comments = Comment.all
  respond_to do |format|
      format.json { render json: @comments.to_json }
    end
  end

  def destroy
    @comment = Comment.find params[:id]
    @comment.destroy
    respond_to do |format|
      format.json { render nothing: true }
    end
  end

end
