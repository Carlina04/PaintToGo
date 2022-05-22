<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades \DB;
use Redirect, Response, File;
use Illuminate\Support\Facades \Hash;
use App\Models\User;
use Illuminate\Support\Facades\Validator;


class UserController extends Controller
{
    public function displayU(Request $req){
        
        $uid=5;
        // $req->input('profile');
        $user=DB::table('users')
                ->where('users.user_id', '=', $uid)
                ->first();
        if ($user){
            return response()->json([
                'users'=>$user
            ]);
            return $user;
        }else{
           return "error";
        }
        }
}