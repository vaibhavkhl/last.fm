class CreateSearchHistories < ActiveRecord::Migration
  def change
    create_table :search_histories do |t|
      t.references :user, index: true
      t.string :artist

      t.timestamps
    end
  end
end
