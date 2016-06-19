class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.datetime :birthday
      t.boolean :gender
      t.string :city
      t.string :country
      t.string :address
      t.string :intro
      t.timestamps null: false
    end
  end
end
