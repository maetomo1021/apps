$(document).ready(function () {
    // モーダルの表示と非表示の制御
    $('.signup-show').click(function () {
        $('#signup-modal').fadeIn();
    });

    $('#close-modal, .modal-wrapper').click(function (e) {
        if (e.target === this) {
            $('#signup-modal').fadeOut();
        }
    });

    // ファイル入力フィールドの変更を監視して画像プレビューを更新
    $('#image-input').on('change', function () {
        var file = this.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#image-preview').html('<img src="' + e.target.result + '" style="width: 100%; height: 100%; object-fit: cover;">');
            };
            reader.readAsDataURL(file);
        }
    });

    // ファイル入力フィールドの変更を監視してプロフィール画像を更新
    $('#image-input').on('change', function () {
        var file = this.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#profile-image').attr('src', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });

    // フォームの送信ボタンにイベントリスナーを追加してプロフィールを更新
    $('#signup-modal .submit-btn').click(function () {
        // 各入力フィールドからデータを取得
        var image = $('#signup-modal input[type="file"]').val();
        var name = $('#signup-modal input[placeholder="名前"]').val();
        var job = $('#signup-modal input[placeholder="仕事"]').val();
        var twitter = $('#signup-modal input[placeholder="Twitter リンク"]').val();
        var Youtube = $('#signup-modal input[placeholder="Youtube リンク"]').val();
        var instagram = $('#signup-modal input[placeholder="Instagram リンク"]').val();
        var comment = $('#signup-modal textarea').val();

        // プロフィール表示部分に反映
        if (name) {
            $('#profile-name').text(name);
        }
        if (job) {
            $('#profile-job').text(job);
        }
        $('#profile-twitter a').attr('href', twitter);
        $('#profile-youtube a').attr('href', Youtube);
        $('#profile-instagram a').attr('href', instagram);

        // コメントが入力されている場合のみ更新
        if (comment.trim() !== '') {
            $('#profile-comment').text(comment);
        }

        // モーダルを閉じる
        $('#signup-modal').fadeOut();
    });

    // BlogBtnをクリックしたときの処理
    $('.BlogBtn').click(function () {
        $('.new-modal').fadeIn(); // 新しいモーダルを表示する
    });

    // 新しいモーダルの閉じるボタンをクリックしたときの処理
    $('.new-modal-close').click(function () {
        $('.new-modal').fadeOut(); // 新しいモーダルを非表示にする
    });
    // ファイル入力フィールドの変更を監視して画像プレビューを更新
    $('.new-modal-image input[type="file"]').on('change', function () {
        var file = this.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#new-image-preview').html('<img src="' + e.target.result + '" style="width: 100%; height: 100%; object-fit: cover;">');
            };
            reader.readAsDataURL(file);
        }
    });


    // 新しいモーダルの背景をクリックしたときの処理
    $('.new-modal').click(function (e) {
        if (e.target === this) {
            $(this).fadeOut(); // 新しいモーダルを非表示にする
        }
    });

    // ページの読み込みが完了した後に実行する
    // ランダムな英数字の生成
    function generateRandomString(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    // ランダムな文字列を生成
    var randomString = generateRandomString(12);

    // ランダムな文字列を右上の要素に挿入
    $('#random-string').text(randomString);
    // 画像選択時にプレビューを表示する
    document.getElementById('image-input').addEventListener('change', function (event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var preview = document.getElementById('new-image-preview');
            preview.innerHTML = ''; // 以前のプレビューをクリア
            var img = document.createElement('img');
            img.src = e.target.result;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            preview.appendChild(img);
        };
        reader.readAsDataURL(file);
    });

    $(document).ready(function () {
        // 削除ボタンをクリックした時の処理
        $('.deleteBtn').click(function (event) {
            event.preventDefault(); // リンクのデフォルトの挙動を無効化
            // 削除対象のブログIDを取得
            var blogId = $(this).data('blog-id');
            // ユーザーに確認ダイアログを表示
            var result = confirm("このブログを削除しますか？");
            // 確認ダイアログでOKがクリックされた場合
            if (result) {
                // 対応するブログ投稿を取得し、削除する
                var blogPost = $('#blog-' + blogId);
                if (blogPost) {
                    blogPost.remove();
                }
            }
        });
        // 最新のブログを削除するボタンをクリックした時の処理
        $('#deleteLatestBlogBtn').click(function () {
            // 最新のブログ投稿を取得
            var latestBlog = $('#latestBlog');
            // 最新のブログ投稿が存在する場合、削除する
            if (latestBlog) {
                latestBlog.remove();
            }
        });
        $('#hideBlogBtn').click(function () {
            // .blogcoment要素を非表示にする
            $('.blogcoment').toggle();
        });
    });

});
